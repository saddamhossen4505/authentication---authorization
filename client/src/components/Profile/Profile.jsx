import { useDispatch, useSelector } from "react-redux";
import avatar from "../../assets/images/avatar.png";
import { useNavigate } from "react-router-dom";
import { userLogoutAction } from "../../redux/auth/authActions";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handleUserLogout.
  const handleUserLogout = () => {
    dispatch(userLogoutAction({ navigate }));
  };
  return (
    <div className="profile-body">
      <div className="profile-wraper">
        <div className="profile-info">
          <div className="user info">
            <img src={avatar} />
            <h3>{user?.name}</h3>
          </div>
          <hr />
          <div className="user-menu">
            <ul>
              <li className="active">
                <a href="#">
                  <i className="fa fa-user-md"></i> Profile
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-edit"></i> Edit
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-unlock-alt"></i> Change Password
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-camera"></i> Profile Photo
                </a>
              </li>
              <li>
                <a href="#" onClick={handleUserLogout}>
                  <i className="fa fa-sign-out"></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-box">
          <div className="profile-details">
            <div className="profile-photo">
              <img src={avatar} />
              <h2>{user?.name}</h2>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
