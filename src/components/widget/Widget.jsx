import './widget.scss'
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
    console.log(type);
    let data;
    //temporary
    const amount = 100;
    const diff = 20;
    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: <PersonOutlinedIcon className='icon' />
            }
            break;
        case 'order':
            data = {
                title: 'ORDER',
                isMoney: false,
                link: 'View net earnings',
                icon: <MonetizationOnOutlinedIcon />
            }
            break;
            case 'earning':
            data = {
                title: 'EARNING',
                isMoney: false,
                link: 'goldenrod',
                icon: <ShoppingCartOutlinedIcon />
            }
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See details',
                icon: <AccountBalanceWalletOutlinedIcon />
            }
            break;
        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className='conter'>{data.isMoney && '$'} {amount}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage">
                    <KeyboardArrowUpIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>

        </div>
    );
};

export default Widget;