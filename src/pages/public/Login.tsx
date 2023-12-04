import React, { useCallback, useState } from "react";
import PageLayout from "../../components/PageLayout";
import { useForm } from "react-hook-form";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import LogoSVG from "../../components/LogoSVG";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../constants";
import { useDispatch } from "react-redux";
import { setLogin } from "../../reducers/auth";
import { Link, useNavigate } from "react-router-dom";
import FormTextInput from "../../components/FormTextInput";
import { login } from "../../services/auth.service";

interface LoginData {
  email: string;
  password: string;
}

type Props = {};

const SignUpLink = styled("div")`
  width: 100%;
  font-size: 15px;
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: center;
`;

const LeftCol = styled(Grid)`
  height: 100%;
  padding: 50px 80px;
`;
const RightCol = styled(Grid)`
  height: 100%;
  background-color: grey;
`;

const Login = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    reset,
    setFocus,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const sendLoginRequest = useCallback(
    async (data: LoginData) => {
      setLoading(true);
      try {
        const response: any = await login(data);
        if (response.status !== 200) {
          setFocus("email");
          if (response.data.key === "no_account") reset();
          throw new Error(response.data.message || response.statusText);
        }
        reset();
        dispatch(
          setLogin({
            user: response.data.user,
            token: response.data.token,
          })
        );
        navigate(`/dashboard`);
      } catch (error) {
        // createNotification("error", error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [loading]
  );

  return (
    <Container maxWidth={"xl"} disableGutters sx={{ height: "100vh" }}>
      <Grid container height={"100%"}>
        <LeftCol item sm={12} md={5}>
          <Grid item>
            <LogoSVG forceShow />
          </Grid>

          <Grid mt={16} item>
            <Typography
              variant="h3"
              fontWeight="600"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Hi, Welcome Back
            </Typography>
            <Typography
              mt={1}
              variant="body1"
              sx={{ textAlign: { xs: "center", md: "left" }, color: "#7C7C7C" }}
            >
              Sign in to view your latest assets.
            </Typography>
          </Grid>

          <Grid mt={4} item>
            <form onSubmit={handleSubmit(sendLoginRequest)}>
              <Grid mt={2} item>
                <FormTextInput
                  staticLabel
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  control={control}
                  errors={errors}
                />
              </Grid>
              <Grid mt={4} item>
                <FormTextInput
                  altLabel
                  staticLabel
                  fullWidth
                  peekPassword
                  label="Password"
                  name="password"
                  type="password"
                  control={control}
                  errors={errors}
                />
              </Grid>
              <Grid mt={5} item>
                <Button variant="contained" fullWidth type="submit">
                  {loading ? <CircularProgress /> : "Login"}
                </Button>
              </Grid>
              <Grid mt={20} item>
                <SignUpLink>
                  Dont have an account yet? &nbsp;&nbsp;
                  <Link tabIndex={-1} to="/register">
                    Sign up
                  </Link>
                </SignUpLink>
              </Grid>
            </form>
          </Grid>
        </LeftCol>
        <RightCol item sm={0} md={7}></RightCol>
      </Grid>
    </Container>
  );
};

export default Login;
