export default function SignUp() {
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

      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="" value="{3:option1}" />
        <label className="form-check-label">By signing up, I agree to the <u>Terms and Conditions</u>.</label>
        </div>
        

        <div className="mb-1">
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>

      
    </div>
    )
}