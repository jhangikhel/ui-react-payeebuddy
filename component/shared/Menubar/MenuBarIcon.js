import { AccountCircle, AttachMoney, Campaign, Group, ViewModule } from "@mui/icons-material";
import { ACCOUNT_ID, ADS_ID, PAYMENT_ID, ROLE_ID, USER_ID } from "../../../utility/shared";
const MenuBarIcon = ({ menuBarId }) => {
    const getIcon = () => {
        switch (menuBarId) {
            case ACCOUNT_ID:
                return <Group />;
            case USER_ID:
                return <AccountCircle />;
            case ROLE_ID:
                return <ViewModule />;
            case ADS_ID:
                return <Campaign />;
            case PAYMENT_ID:
                return <AttachMoney />;
            default:
                return <Group />;
        }
    }
    return (<>{getIcon()}</>)
}
export default MenuBarIcon;