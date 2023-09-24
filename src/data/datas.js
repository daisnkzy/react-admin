import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineUsers,
} from 'react-icons/hi2';
import { MdAttachMoney, MdMoney, MdHouse, MdEqualizer } from 'react-icons/md';

const navLists = [
  {
    name: '主页',
    link: '/dashboard',
    icon: HiOutlineHome,
  },
  {
    name: '房间',
    link: '/cabins',
    icon: HiOutlineCalendarDays,
  },

  {
    name: '账户',
    link: '/account',
    icon: HiOutlineUsers,
  },
  {
    name: '设置',
    link: '/settings',
    icon: HiOutlineCog6Tooth,
  },
];

const chartboxes = [
  {
    name: '月收入',
    number: '77k',
    icon: MdAttachMoney,
  },
  {
    name: '日收入',
    number: '7k',
    icon: MdMoney,
  },
  {
    name: '入住率',
    number: '25%',
    icon: MdEqualizer,
  },
  {
    name: '剩余房间',
    number: '7',
    icon: MdHouse,
  },
];

export { navLists, chartboxes };
