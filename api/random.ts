import { NowRequest, NowResponse } from '@now/node';
import getRandomNumber from '../utils/randomNumber';

export default (req: NowRequest, res: NowResponse) => {
    console.log('random')
    res.status(200).json({
      name: 'John',
      email: 'john@example.com',
      id: getRandomNumber(),
    });
  }
};