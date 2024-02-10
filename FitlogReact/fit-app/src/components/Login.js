const Login = () => {
  return (
    <div class="main">
      <div class="navbar">
        <div class="'icon">
          <h2 class="logo">FITLOG</h2>
        </div>

        <div class="menu">
          <ul>
            <li>
              <a href="#">MY DETAILS</a>
            </li>
            <li>
              <a href="#">CALCULATE BMI</a>
            </li>
            <li>
              <a href="#">NUTRITION VALUES</a>
            </li>
            <li>
              <a href="#">WORKOUTS</a>
            </li>
            <li>
              <a href="#">LOGOUT</a>
            </li>
          </ul>
        </div>
        <div class="content">
          <h1>
            A Small Step to Fitness
            <br />
            <span>A Big Leap for Health</span>
          </h1>
          <p class="par">
            <br />
            Don't neglect your health!
          </p>

          <button class="cn">
            <a href="">JOIN IN</a>
          </button>
        </div>

        <div class="form">
          <h2>LOGIN</h2>
          <input type="email" name="email" placeholder="Enter Email" />
          <input type="password" name="" placeholder="Enter Password" />
          <button class="btn">
            <a href="#">Submit</a>
          </button>

          <br />
          <div class="account">
            <p>
              Don't have an account? <a href="./Register.html">Register Here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
