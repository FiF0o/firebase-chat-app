/**
 * Created by jonlazarini on 10/05/17.
 */
import React from 'react';

const SignIn = ({signingIn}) => (
    <div>
          <button
              onClick={signingIn}
              className="mui-btn mui-btn--primary"
          >
              Sign In
          </button>
    </div>
);

export default SignIn
