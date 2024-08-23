import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const App = () => {

  return (
    <div className="main_container">
      <div className="container">
        <h2>Modal Login Form</h2>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
          Open Login Modal
        </button>

        <br />
        <br />

        <h2>Modal Registration Form</h2>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registrationModal">
          Open Registration Modal
        </button>

        {/* Login Modal */}
        <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <h5 className="modal-title text-center" id="loginModalLabel">LOGIN TO MY ACCOUNT</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <form>
                  <div className="form-group">
                    <input type="email" className="form-control" required autoComplete="off" placeholder="Email Address" />
                    <label className="form-control-placeholder" ></label>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" required autoComplete="off" placeholder="Password" />
                    <label className="form-control-placeholder"></label>
                  </div>&nbsp;
                  <div className="form-group">
                    <label className="container-checkbox">
                      Remember Me On This Computer
                      <input type="checkbox" defaultChecked />
                      <span className="checkmark-box"></span>
                    </label>
                  </div>
                  <div className="btn-check-log">
                    <button type="submit" className="btn-check-login">LOGIN</button>
                  </div>
                  <div className="forgot-pass-fau text-center pt-3">
                    <a href="#" className="text-secondary"></a>
                  </div>
                  <div className="create-new-fau text-center pt-3">
                    <a href="#" className="text-primary-fau" data-bs-toggle="modal" data-bs-target="#registrationModal" data-bs-dismiss="modal">Create A New Account</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Modal */}
        <div className="modal fade" id="registrationModal" tabIndex="-1" aria-labelledby="registrationModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body">
                <h5 className="modal-title text-center" id="registrationModalLabel">CREATE AN ACCOUNT</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" required autoComplete="off" />
                    <label className="form-control-placeholder">User Name</label>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" required autoComplete="off" />
                    <label className="form-control-placeholder">Email address</label>
                  </div>
                  <div className="form-group">
                    <label className="select-form-control-placeholder">Profession</label>
                    <select className="form-control">
                      <option>Select profession</option>
                      <option>Students</option>
                      <option>Research Scholar</option>
                      <option>Professor</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="tel" className="form-control" required autoComplete="off" />
                    <label className="form-control-placeholder">Phone Number</label>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" required autoComplete="off" />
                    <label className="form-control-placeholder">Organization</label>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" required autoComplete="off" />
                    <label className="form-control-placeholder">Designation</label>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" required autoComplete="off" />
                    <label className="form-control-placeholder">City</label>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" required autoComplete="off" />
                    <label className="form-control-placeholder">Password</label>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" required autoComplete="off" />
                    <label className="form-control-placeholder">Confirm Password</label>
                  </div>
                  <div className="form-group forgot-pass-fau text-center">
                    <a href="#" className="text-secondary">
                      By Clicking "SIGN UP" you accept our<br />
                      <span className="text-primary-fau">Terms and Conditions</span>
                    </a>
                  </div>
                  <div className="btn-check-log">
                    <button type="submit" className="btn-check-login">SIGN UP</button>
                  </div>
                  <div className="create-new-fau text-center pt-3">
                    <a href="#" className="text-primary-fau" data-bs-toggle="modal" data-bs-target="#loginModal" data-bs-dismiss="modal">Already Have An Account</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
