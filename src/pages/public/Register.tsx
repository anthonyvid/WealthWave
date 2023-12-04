import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../../constants";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import LogoSVG from "../../components/LogoSVG";
import FormTextInput from "../../components/FormTextInput";
import { register } from "../../services/auth.service";

interface RegisterData {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
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

const Register = (props: Props) => {
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
    resolver: yupResolver(registerSchema),
  });

  const sendRegisterRequest = useCallback(
    async (data: RegisterData) => {
      setLoading(true);
      try {
        const response: any = await register(data);
        if (response.status !== 200) {
          setFocus("email");
          if (response.data.key === "no_account") reset();
          throw new Error(response.data.message || response.statusText);
        }
        reset();
        // dispatch(
        //   setLogin({
        //     user: response.data.user,
        //     token: response.data.token,
        //   })
        // );
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

          <Grid mt={8} item>
            <Typography
              variant="h3"
              fontWeight="600"
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              Register
            </Typography>
            <Typography
              mt={1}
              variant="body1"
              sx={{ textAlign: { xs: "center", md: "left" }, color: "#7C7C7C" }}
            >
              Register your account to get started.
            </Typography>
          </Grid>

          <Grid mt={4} item>
            <form onSubmit={handleSubmit(sendRegisterRequest)}>
              <Grid mt={2} item>
                <FormTextInput
                  staticLabel
                  fullWidth
                  label="Firstname"
                  name="firstname"
                  type="text"
                  placeholder="John"
                  control={control}
                  errors={errors}
                />
              </Grid>
              <Grid mt={2} item>
                <FormTextInput
                  staticLabel
                  fullWidth
                  placeholder="Smith"
                  label="Lastname"
                  name="lastname"
                  type="text"
                  control={control}
                  errors={errors}
                />
              </Grid>
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
                  {loading ? <CircularProgress /> : "Register"}
                </Button>
              </Grid>
              <Grid mt={20} item>
                <SignUpLink>
                  Already have an account? &nbsp;&nbsp;
                  <Link tabIndex={-1} to="/login">
                    Login
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

export default Register;
