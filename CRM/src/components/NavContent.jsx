import { FiBarChart2, FiCode, FiTool, FiUsers, FiBookOpen, FiBriefcase, FiLifeBuoy } from 'react-icons/fi';

export const navContent = {
  solutions: {
    title: 'Solutions',
    links: [
      { name: 'For Small Business', description: 'Get started with our essential tools.', icon: <FiUsers />, path: '/solutions/small-business' },
      { name: 'For Mid-Market', description: 'Scale your operations with advanced features.', icon: <FiBriefcase />, path: '/solutions/mid-market' },
      { name: 'For Enterprise', description: 'Custom solutions for large organizations.', icon: <FiTool />, path: '/solutions/enterprise' },
    ],
  },
  platform: {
    title: 'Platform',
    links: [
      { name: 'Core CRM', description: 'Centralize your customer data.', icon: <FiUsers />, path: '/platform/crm' },
      { name: 'Sales Automation', description: 'Automate your sales workflows.', icon: <FiBarChart2 />, path: '/platform/sales' },
      { name: 'Marketing Tools', description: 'Connect with your marketing stack.', icon: <FiCode />, path: '/platform/marketing' },
    ],
  },
  support: {
    title: 'Support',
    links: [
      { name: 'Help Center', description: 'Find answers and get help.', icon: <FiLifeBuoy />, path: '/support/help' },
      { name: 'Documentation', description: 'Read our comprehensive guides.', icon: <FiBookOpen />, path: '/support/docs' },
      { name: 'Contact Us', description: 'Get in touch with our team.', icon: <FiBriefcase />, path: '/support/contact' },
    ],
  },
};
