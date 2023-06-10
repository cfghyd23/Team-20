import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Money = () => {
  const percentage = 66;

  return (
    <div class style={{ width: 200,height:200}}>
      <CircularProgressbar value={percentage} text={`₹${percentage}%`} />
      <div>Money Raised</div>
    </div>
  );
};

export default Money;
