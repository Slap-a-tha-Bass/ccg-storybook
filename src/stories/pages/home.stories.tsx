import Home, { getServerSideProps } from '../../pages/index';

export default {
    title: 'Pages/Home',
    component: Home,
};

export const HomePages = (args: any) => <Home {...args} />;
HomePages.args = { fullName: "John Dough"};

// if you want to test api routes, you can use this snippet
HomePages.loaders = [
    async () => {
        const data = await getServerSideProps();
        return {
            props: data.props,
        };
    }
];
