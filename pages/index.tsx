import Content from './Content';
import Snoowrap from 'snoowrap';

export default function index(props) {
  return (
    <>
      <div>
        <Content data={props.data} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const reddit = new Snoowrap({
    userAgent: '',
    clientId: '',
    clientSecret: '',
    username: '',
    password: ''
  });
  const data = await reddit.getHot();
  return {
    props: { data }
  };
};
