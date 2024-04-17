import React ,{useState}from "react";
import { Link } from "react-router-dom";
import useUserStore from '../store/userStore';

const AccountSettings = () => {
  const { user } = useUserStore();

  const [userr, setUser] = useState({
    name:user.name ? user.name : "keltoum" ,
    email: user.email ? user.email :"keltoumidhssou@gmail.com",
    password: user.password ? user.password :"123456",
    role:user.role ? user.role : "teacher",
  });

  return (
    <div className="container flex-grow-1 max-w-[1200px] m-auto px-7 border rounded-md container-p-y">
      <h4 className="font-bold text-xl py-3 mb-4">Account settings</h4>
      <div className="card overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <div className="list-group list-group-flush flex flex-col account-settings-links">
              <Link className="list-group-item list-group-item-action active py-4" to="#account-general">General</Link>
              <Link className="list-group-item list-group-item-action py-4 " to="#account-change-password">Change password</Link>
              <Link className="list-group-item list-group-item-action py-4" to="/profile">Info</Link>
              <Link className="list-group-item list-group-item-action py-4" to="#account-social-links">Social links</Link>
              <Link className="list-group-item list-group-item-action py-4" to="#account-connections">Connections</Link>
              <Link className="list-group-item list-group-item-action py-4" to="#account-notifications">Notifications</Link>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="account-general">
                <div className="card-body flex items-center">

                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="w-32" />

                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label font-bold">Username</label>
                    <input type="text" className="form-input m-2" value={userr.name}/>
                  </div>

                  <div className="form-group ">
                    <label className="form-label font-bold">E-mail</label>
                    <input type="text" className="form-input mb-1 m-2" value={userr.email} />

                  </div>
                  <div className="form-group">
                    <label className="form-label font-bold">University</label>
                    <input type="text" className="form-input m-2" value="Ynov Compus" />
                  </div>
                </div>
              </div>
              {/* Other tab panes go here */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AccountSettings;
