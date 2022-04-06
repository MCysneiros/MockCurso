import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

const Home = () => {
	const { user } = useUser();
	return <div>Oi {user?.name}</div>;
};

export default Home;

export const getServerSideProps = withPageAuthRequired();
