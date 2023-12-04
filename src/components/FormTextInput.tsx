import React, { ChangeEvent, useCallback, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import KeyboardCapslockIcon from "@mui/icons-material/KeyboardCapslock";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import {
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Control, Controller, FieldValues } from "react-hook-form";

const ErrorText = styled("div")`
  margin-top: 3px;
  margin-bottom: -17px;
  color: ${({ theme }) => theme.palette.error.main};
  text-align: left;
`;

const TextInputWrap = styled("div")`
  width: 100%;
  margin-bottom: 10px;
`;
const LabelWrap = styled("div")`
  display: flex;
  margin-bottom: 5px;
  justify-content: space-between;
`;

const StyledTextField = styled(TextField)`
  border-radius: 15px;
`;

// error: {
// 	background: `${theme.palette.error.main}20`,
// },
// success: {
// 	background: `${theme.palette.primary.main}20`,
// 	"& .MuiOutlinedInput-root": {
// 		"& fieldset": {
// 			borderColor: theme.palette.primary.main,
// 		},
// 	},
// },

type OnChangeHandler = (
  value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;
interface ErrorType {
  [name: string]: any | undefined;
}

type Props = {
  type?: string;
  placeholder?: string;
  uniqueData?: string;
  isDataUnique?: string;
  inputText?: string;
  name?: string;
  staticLabel?: boolean;
  autoFocus?: boolean;
  uniqueDataValidation?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  peekPassword?: boolean;
  disabled?: boolean;
  altLabel?: boolean;
  multiline?: boolean;
  rules?: object;
  errors?: ErrorType;
  control?: Control<FieldValues> | any;
  label: string;
  onChangeHandler?: OnChangeHandler;
};

const PLACEHOLDER = {
  EMAIL: "john@email.com",
  PASSWORD: "••••••••",
};

const FormTextInput = ({
  type = "text",
  placeholder = "",
  isDataUnique,
  required = false,
  name = "",
  label,
  staticLabel = false,
  autoFocus = false,
  fullWidth = false,
  peekPassword = false,
  multiline = false,
  disabled = false,
  uniqueDataValidation = false,
  uniqueData = "",
  altLabel = false,
  rules = {},
  control,
  errors,
  onChangeHandler = () => {},
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [capsOn, setCapsOn] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  if (type === "email") {
    placeholder = PLACEHOLDER.EMAIL;
  } else if (type === "password") {
    placeholder = PLACEHOLDER.PASSWORD;
  }

  const getStartIcon = () => {
    switch (type) {
      case "email":
        return <EmailIcon sx={{ marginRight: "7px" }} />;
      case "password":
        return <LockIcon sx={{ marginRight: "7px" }} />;

      default:
        break;
    }
  };

  const checkForCaps = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.getModifierState("CapsLock")) {
        setCapsOn(true);
      } else {
        setCapsOn(false);
      }
    },
    []
  );

  return (
    <TextInputWrap>
      <LabelWrap>
        {staticLabel && <InputLabel required={required}>{label}</InputLabel>}
        {altLabel && (
          <Link
            style={{ textDecoration: "none" }}
            tabIndex={-1}
            to="/forgot-password"
          >
            <InputLabel
              sx={{
                fontSize: "14px",

                ":hover": { cursor: "pointer" },
              }}
            >
              Forgot Password?
            </InputLabel>
          </Link>
        )}
      </LabelWrap>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledTextField
            required={required}
            // errorBg={errors?.[name]}
            // successBg={!errors?.[name] && value}
            multiline={multiline}
            onBlur={onBlur}
            onChange={(value) => {
              onChange(value);
              onChangeHandler(value);
            }}
            value={value}
            placeholder={placeholder}
            type={peekPassword && showPassword ? "text" : type}
            onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
              type === "password" && checkForCaps(e)
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              type === "password" && checkForCaps(e)
            }
            autoFocus={autoFocus}
            fullWidth={fullWidth}
            disabled={disabled}
            label={staticLabel ? null : label}
            error={errors?.[name] !== undefined}
            InputProps={{
              startAdornment: getStartIcon(),
              endAdornment: (
                <>
                  {type === "password" && (
                    <InputAdornment position="end">
                      {capsOn ? <KeyboardCapslockIcon /> : ""}
                    </InputAdornment>
                  )}
                  {peekPassword && (
                    <InputAdornment position="start">
                      <IconButton
                        tabIndex={-1}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )}
                  {uniqueDataValidation && (
                    <InputAdornment position="end">
                      {uniqueData !== "" ? (
                        isDataUnique ? (
                          <CheckCircleIcon />
                        ) : (
                          <ErrorIcon />
                        )
                      ) : (
                        ""
                      )}
                    </InputAdornment>
                  )}
                </>
              ),
            }}
          />
        )}
        name={name}
      />
      {errors?.[name] && (
        <ErrorText>
          <span>{errors?.[name].message}</span>
        </ErrorText>
      )}
    </TextInputWrap>
  );
};

export default FormTextInput;
