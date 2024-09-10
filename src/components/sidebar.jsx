import React from 'react';
import './sidebar.scss'; // Import the SCSS stylesheet

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="https://www.youtube.com/@srminstituteofscienceandte1060" target="_blank">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACjCAYAAADmbK6AAAAAAXNSR0IArs4c6QAABX1JREFUeAHt3eFx00gYBmCXcB1cSqADroOjA+iA6yDXAXSQ64ASUkJ+MpezvDOSh8zlbKsEjlWiEHscwMFafbYfZjTCgVirZ1+v5F2tNJn4Q4AAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEjligTemXm5TONpf/mn9++9ZyO79+sfk7+b2OmMqu7SKQw5BDsqiv37RNerusq3fLurpYNdWHVTO9XM2r1C3NrF021eehl6/bm15222+qD12Zmuo8lzGHXYB3qeHg/zdX5rKp/lw11dXQ4Rrq/VfNrM0fmEX996vg3Ir3lMByXv2RK3KokIzxvrkFbVM6e2qf/TygwLKe/jVGWEpsc1XPkkAGDN22IuXDcolQjLmNu0Be+UK0LQBRftbepLMxQ1J023X1Loq7cmwRWM6ri6KBKPCt+xv707ZJ67glBjF+9I2KG7yrZqRtv40hrxRrArlfbqRAjBf0urpYQ/AihsAyd2SPe9gsH8q6SjH0lWJN4H70onwgRv4ArCF4EUNg1cwuT65lbKrP7adPv8aoAaV4EFg1s4Md8vuZD1HbpJcPCP4SQ+BnKvSQf3cxn76OUQNK0QncXxAx7PliXaXb+vrNcl6lYOHVvRPpc5DHagcPyP0315ubj2fBOtfPI9XFyZelSB/jRjdKDmW+tGvwD8H3vq3ra4yV/zHC2AuMfugWxr4qYqwX9fTV4C3URsu4uefLJp0PXoYtreSimV5ulsXrEQXyZfqDB+E7Ycy7P8b5pDCOGLxtm44Sxr5sea5NwW/dV/12rQMIFBmX/oGWcZOiyPnkM8q1WU6v9yjw5RA9/PnaMyt98EP3M8u1R35v9Vggchj7cg7WFSSMPXGM9SGEsZfa+6FbGHvaGOtDCmM3T2ef0yOEMUYI+1IcQhi/3lBgz3O5hbGPQYx19DDmEaLVfDbMBRbCGCOEfSmidu3kQ/LgF/0KYx+DGOtond73h+T3X1rsYS9ru3t/nd4xYnhXikhhLH2PH8OBkZI4mUwihLE7LxxhHo4wBgvjmJeQ7b2rZsdDe76mMlh1nHZxxgjjYF01O4Yx3/D0tGs/2N6XnHaQd33Qrprdw+gGUJHyWGpCVpGuml3D2FTmwEQKYy5LoW6UEl01O23DVNVoScxhjDeFdKdQPffDZBJ/wDCe6h0lbtP1i4DVcdpFCjaXuUirmFtTNwwNmPsi49O7f7kYOpSGAgNmcVJkumqwMOrwjpjEyWRSpHsnWBiXTeU+O0HzOBn8cq1gYbxJHz2gKGoYiwwLBgnkopkak44axL5cJ9I6tlrFvsYDr7tzxyPvAF/MkxuEBs7gWtHu5igf5T2+2389XXWtrg/mRTdH+YAf7/toiDA/HfY8eSLWwWTvyYLmSsxjuLkrJD+iY9HMLvMSajw7n1rMq9SVre4eO3fezqevb1My3PdkzR7pP+RHWHRLk17m4HZLnX7PgXi85BbqR5bHv/Pw9/598/p+e1q7Iw2U3SJAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBQRuB/2NSRTls6jRkAAAAASUVORK5CYII=" alt="YouTube" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/srmisttrichy/" target="_blank">
            <img src="data:image/png;base64,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" alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/srmist.trichy/" target="_blank">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACjCAYAAADmbK6AAAAAAXNSR0IArs4c6QAAA/BJREFUeAHt2+Ft2kAYgOGMkA2aDZoN2hEyQjdoN2g36AgZoSNkBH6HxljCKJFSjEdoe/mREgRfOcQdEn4iIQFn7uzHr5AF5OLCHwECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBEYo8NS2V8v5/c1yPv3Ud83XdEv3/93ub351Pz8+L6bXadsREjnkkgIprn7e3K662fA3vt85t6FrP5TcN3OPRCBFuOpmdznxbW4rxpHEUvIw+675thnWIY/FWPIsjWDuY4WY4hXjCIIpdYj9ovlyyDvgrteIsdSZOvN5h6f2aldUhz4vxjOPptTh9Yvm9tDodr1OjKXO1hnPW+JdMQUqxjOOptShLecP6UPsrM8Q99lejKXO2BnPu+qaH/vElbuNGM84mlKHtupmk9zQ+q5Jr/k8PD6+K7Vf5h2hQG6Iy+7hrm0nlyOkcsglBYa2vcyN8bmdXpfcJ3OPVGBosz9fHEZK5bBLCxwQ46T0Ppl/pAK5MabrxZFSOezSAmIsLWz+vQXEuDeVDUsLiLG0sPn3FhDj3lQ2LC0gxtLC5n8VSP+lF91e/uEq70cSk2i+9bHXnXCHQBLI/XblmNsPvjIU4brAMePKmcvnketnwf0XgZyAjrrtvPnuFBB4I3DUwDKuLf2W8c1p8CAJnCxG14sC3BQ4RYyuFzfPgscvAqeIsXe9qL5tAqeI0fXitjPhuZNcM/p8UXhbBWq/M7pe3HoaPJkEasfoelF3OwWW3ezuf7fMYIdovmExe79zZwwQiAT8aifSMVZVQIxVuS0WCYgx0jFWVUCMVbktFgmIMdIxVlVAjFW5LRYJiDHSMVZVQIxVuS0WCYgx0jFWVUCMVbktFgmIMdIxVlVAjFW5LRYJiDHSMVZVQIxVuS0WCYgx0jFWVUCMVbktFgmIMdIxVlVAjFW5LRYJiDHSMVZVQIxVuS0WCYgx0jFWVUCMVbktFgmIMdIxVlVAjFW5LRYJiDHSMUaAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIFBI4A/lxzelGghOswAAAABJRU5ErkJggg==" alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="https://x.com/srmist_trichy/status/1654449245783486469" target="_blank">
            <img src="data:image/png;base64,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" alt="Twitter" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;