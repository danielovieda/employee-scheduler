export default function SignIn() {
  return (
    <div className="container mt-5">
        <label className="form-label">
          E-mail
        </label>
      <div className="mb-1">
        <input
          type="email"
          className="form-control"
          name=""
          id=""
          aria-describedby="emailHelpId"
          placeholder=""
        />

      </div>

      <div className="mb-1">
        <label className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name=""
          id=""
          placeholder=""
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  );
}
