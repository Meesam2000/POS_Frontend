import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  AttachMoney,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/dashboard/home" className="link">
              {props.text === "home" ? <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li> : <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>}

            </Link>
            <Link to="/dashboard/addCategory" className="link">
              {props.text === "addCategory" ?
                <li className="sidebarListItem active">
                  <TrendingUp className="sidebarIcon" />
                  Add Category
                </li> : <li className="sidebarListItem">
                  <TrendingUp className="sidebarIcon" />
                  Add Category
                </li>
              }
            </Link>
            <Link to="/dashboard/addProduct" className="link">
              {props.text === "addProduct" ?
                <li className="sidebarListItem active">
                  <Timeline className="sidebarIcon" />
                  Add Product
                </li> : <li className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  Add Product
                </li>
              }
            </Link>
            <Link to="/dashboard/posePanel" className="link">
              {props.text === "Transactions" ?
                <li className="sidebarListItem active">
                  <AttachMoney className="sidebarIcon" />
                  Transactions
                </li> : <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Transactions
                </li>
              }
            </Link>
            <Link to="/dashboard/orders" className="link">
              {props.text === "Orders" ?
                <li className="sidebarListItem active">
                  <AttachMoney className="sidebarIcon" />
                  Orders
                </li> : <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Orders
                </li>
              }
            </Link>
            <Link to="/dashboard/reverseOrders" className="link">
              {props.text === "reverseOrders" ?
                <li className="sidebarListItem active">
                  <AttachMoney className="sidebarIcon" />
                  Reverse Orders
                </li> : <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Reverse Orders
                </li>
              }
            </Link>

            <Link to="/dashboard/profile" className="link">
              {props.text === "profile" ? <li className="sidebarListItem active">
                <PermIdentity className="sidebarIcon" />
                Profile
              </li> : <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Profile
              </li>}

            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
