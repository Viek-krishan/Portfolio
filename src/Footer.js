import "boxicons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-evenly mt-20">
      <section>
        <h1 className="text-xl">VivekKrishan</h1>
      </section>
      <section>
        <h5 className="text-center text-sm">
          © 2023 CopyFolio. All rights reserved.
        </h5>
        <h5 className="text-center text-sm"> Powered by react</h5>
      </section>
      <section>
        <div>
          <Link className="m-2" to="">
            <box-icon type="logo" name="linkedin"></box-icon>
          </Link>
          <Link className="m-2" to="">
            <box-icon name="github" type="logo"></box-icon>
          </Link>
          <Link className="m-2" to="">
            <box-icon name="instagram-alt" type="logo"></box-icon>
          </Link>
          <Link className="m-2" to="">
            <box-icon name="twitter" type="logo"></box-icon>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Footer;
