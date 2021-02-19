import React, { Component } from "react";
import { Formik } from "formik";
import { object, ref, string } from "yup";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import Spinner from "../Spinner/Spinner";
import Alert from "../Alert/Alert";

export default class FormPasswordReset extends Component {
  state = {
    passChangeSuccess: false
  };

  _handleModalClose = () => {
    this.setState(() => ({
      passChangeSuccess: false
    }));
  };

  _renderModal = () => {
    const onClick = () => {
      this.setState(() => ({ passChangeSuccess: false }));
    };

    return (
      <Alert
        isOpen={this.state.passChangeSuccess}
        onClose={this._handleClose}
        handleSubmit={onClick}
        title="Redefinição de Senha"
        text="Sua senha foi alterada com sucesso!"
        submitButtonText="Ok.ENTENDI"
      />
    );
  };

  _handleSubmit = ({
    newPass,
    confirmPass,
    setSubmitting,
    resetForm
  }) => {
    // fake async login
    setTimeout(async () => {
      setSubmitting(false);

      this.setState(() => ({
        passChangeSuccess: true
      }));

      resetForm();
    }, 1000);
  };

  render() {
    return (
      <Formik
        initialValues={{
          newPass: "",
          confirmPass: ""
        }}
        validationSchema={object().shape({
          newPass: string().required("Digite a nova senha"),
          confirmPass: string()
            .oneOf([ref("newPass")], "As senhas não coincidem")
            .required("Confirme a nova senha")
        })}
        onSubmit={(
          { newPass, confirmPass },
          { setSubmitting, resetForm }
        ) =>
          this._handleSubmit({
            newPass,
            confirmPass,
            setSubmitting,
            resetForm
          })
        }
        render={(props) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            isSubmitting
          } = props;
          return isSubmitting ? (
            <Spinner />
          ) : (
            <Paper className="form form--wrapper" elevation={0}>
              <form className="form" onSubmit={handleSubmit}>
               
                <FormControl
                  fullWidth
                  margin="dense"
                  error={Boolean(touched.newPass && errors.newPass)}
                >
                  <InputLabel
                    htmlFor="password-new"
                    error={Boolean(touched.newPass && errors.newPass)}
                  >
                    {"Nova Senha"}
                  </InputLabel>
                  <Input
                    id="password-new"
                    name="newPass"
                    type="password"
                    value={values.newPass}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.newPass && errors.newPass)}
                  />
                  <FormHelperText
                    error={Boolean(touched.newPass && errors.newPass)}
                  >
                    {touched.newPass && errors.newPass ? errors.newPass : ""}
                  </FormHelperText>
                </FormControl>
                <FormControl
                  fullWidth
                  margin="dense"
                  error={Boolean(touched.confirmPass && errors.confirmPass)}
                >
                  <InputLabel
                    htmlFor="password-confirm"
                    error={Boolean(touched.confirmPass && errors.confirmPass)}
                  >
                    {"Confirmar Senha"}
                  </InputLabel>
                  <Input
                    id="password-confirm"
                    name="confirmPass"
                    type="password"
                    value={values.confirmPass}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={Boolean(touched.confirmPass && errors.confirmPass)}
                  />
                  <FormHelperText
                    error={Boolean(touched.confirmPass && errors.confirmPass)}
                  >
                    {touched.confirmPass && errors.confirmPass
                      ? errors.confirmPass
                      : ""}
                  </FormHelperText>
                </FormControl>
                <Button
                  type="submit"
                  variant="raised"
                  color="primary"
                  disabled={Boolean(!isValid || isSubmitting)}
                  style={{ margin: "1rem" }}
                >
                  {"Redefinir Senha"}
                </Button>
              </form>
              {this._renderModal()}
            </Paper>
          );
        }}
      />
    );
  }
}
