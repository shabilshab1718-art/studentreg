
import { useState } from "react";

function App() {
  const initialData = {
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    course: "",
    address: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData(initialData);
    setSubmitted(false);
  };

  const inputStyle =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition duration-200 placeholder:text-slate-400 hover:border-purple-300 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-100";

  const labelStyle =
    "mb-2 block text-sm font-semibold text-slate-700";

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4 sm:p-8">

      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl" />

      <div className="relative grid w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-purple-900/10 lg:grid-cols-5">

        {/* LEFT PANEL */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-800 p-8 text-white sm:p-12 lg:col-span-2">

          <div className="absolute -right-20 top-20 h-64 w-64 rounded-full border-[35px] border-white/5" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border-[35px] border-white/5" />

          {/* Brand */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-2xl font-bold text-purple-800 shadow-lg">
              ✦
            </div>

            <span className="text-xl font-extrabold tracking-wider">
              EDU<span className="font-light text-purple-300">SPACE</span>
            </span>
          </div>

          {/* Left content */}
          <div className="relative z-10 my-12">

            <span className="inline-block rounded-full border border-purple-300/30 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-purple-200">
              ✧ ADMISSIONS OPEN 2026
            </span>

            <h1 className="mt-8 text-4xl font-extrabold leading-tight sm:text-5xl">
              Your Future
              <br />
              Starts <span className="text-purple-300">Here.</span>
            </h1>

            <p className="mt-6 max-w-sm text-sm leading-7 text-purple-100/80">
              Take the first step towards your dreams.
              Register today and unlock endless opportunities
              for learning and growth.
            </p>

            {/* Features */}
            <div className="mt-12 space-y-7">

              {[
                {
                  icon: "✦",
                  title: "Quality Education",
                  desc: "Learn from the best",
                },
                {
                  icon: "♛",
                  title: "Expert Mentors",
                  desc: "Guidance for success",
                },
                {
                  icon: "↗",
                  title: "Bright Future",
                  desc: "Build your career",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-xl text-purple-200">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="mt-1 text-xs text-purple-200/70">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-[10px] font-semibold tracking-widest text-purple-200/60">
            <span>© 2026 EDU SPACE</span>
            <span>LEARN • GROW • SUCCEED</span>
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white p-6 sm:p-10 lg:col-span-3 lg:p-12">

          {submitted ? (

            /* SUCCESS SCREEN */
            <div className="flex min-h-[600px] flex-col items-center justify-center text-center">

              <div className="mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl text-green-600">
                ✓
              </div>

              <span className="text-xs font-bold tracking-[0.25em] text-green-600">
                REGISTRATION COMPLETE
              </span>

              <h2 className="mt-4 text-3xl font-extrabold text-slate-900">
                You're Registered!
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
                Welcome aboard,{" "}
                <strong className="text-purple-700">
                  {formData.name}
                </strong>
                ! Your registration has been completed successfully.
              </p>

              <div className="mt-8 w-full max-w-md rounded-2xl border border-purple-100 bg-purple-50/70 p-6 text-left">

                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Student Name
                  </p>
                  <p className="mt-1 font-bold text-slate-800">
                    {formData.name}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Selected Course
                  </p>
                  <p className="mt-1 font-bold text-slate-800">
                    {formData.course}
                  </p>
                </div>

              </div>

              <button
                type="button"
                onClick={resetForm}
                className="mt-8 w-full max-w-md rounded-xl bg-gradient-to-r from-indigo-700 to-purple-700 px-6 py-4 font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:shadow-xl"
              >
                Register Another Student →
              </button>

            </div>

          ) : (

            <>
              {/* FORM HEADING */}
              <div className="mb-8">

                <span className="text-xs font-extrabold tracking-[0.25em] text-purple-600">
                  LET'S GET STARTED
                </span>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Student Registration
                </h2>

                <p className="mt-3 text-sm text-slate-500">
                  Please fill in your details below.
                </p>

                <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500" />
                </div>

              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* ROW 1 */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label htmlFor="name" className={labelStyle}>
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className={inputStyle}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelStyle}>
                      Email Address <span className="text-red-500">*</span>
                    </label>

                    <input
  id="email"
  type="email"
  name="email"
  placeholder="example@gmail.com"
  value={formData.email}
  onChange={(e) => {
    const value = e.target.value;

    if (
      !value.includes("@") ||
      value.endsWith("@gmail.com") ||
      !value.includes("@gmail.com")
    ) {
      setFormData((prev) => ({
        ...prev,
        email: value,
      }));
    }
  }}
  autoComplete="email"
  pattern="[a-zA-Z0-9._%+-]+@gmail\.com"
  title="Enter a Gmail address ending with @gmail.com"
  className={inputStyle}
  required
/>
                  </div>

                </div>

                {/* ROW 2 */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label htmlFor="phone" className={labelStyle}>
                      Phone Number <span className="text-red-500">*</span>
                    </label>

                    <input
  id="phone"
  type="tel"
  name="phone"
  placeholder="10-digit number"
  pattern="[0-9]{10}"
  maxLength={10}
  inputMode="numeric"
  value={formData.phone}
  onChange={(e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");

    setFormData((prev) => ({
      ...prev,
      phone: digitsOnly,
    }));
  }}
  className={inputStyle}
  required
/>
                  </div>

                  <div>
                    <label htmlFor="dob" className={labelStyle}>
                      Date of Birth <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="dob"
                      type="date"
                      name="dob"
                      max={new Date().toISOString().split("T")[0]}
                      value={formData.dob}
                      onChange={handleChange}
                      className={inputStyle}
                      required
                    />
                  </div>

                </div>

                {/* ROW 3 */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label htmlFor="gender" className={labelStyle}>
                      Gender <span className="text-red-500">*</span>
                    </label>

                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={inputStyle}
                      required
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="course" className={labelStyle}>
                      Choose Course <span className="text-red-500">*</span>
                    </label>

                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className={inputStyle}
                      required
                    >
                      <option value="">Select course</option>
                      <option value="BCA">BCA</option>
                      <option value="BSc Computer Science">
                        BSc Computer Science
                      </option>
                      <option value="BCom">BCom</option>
                      <option value="BBA">BBA</option>
                      <option value="BA English">BA English</option>
                      <option value="MCA">MCA</option>
                    </select>
                  </div>

                </div>

                {/* ADDRESS */}
                <div>
                  <label htmlFor="address" className={labelStyle}>
                    Address <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    placeholder="Enter your full address..."
                    rows={3}
                    value={formData.address}
                    onChange={handleChange}
                    autoComplete="street-address"
                    className={`${inputStyle} resize-none`}
                    required
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-indigo-700 to-purple-700 px-6 py-4 font-bold text-white shadow-lg shadow-purple-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-300 active:translate-y-0"
                >
                  <span>Complete Registration</span>
                  <span className="text-xl transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </button>

                <p className="pt-1 text-center text-xs text-slate-400">
                  ✦ Your information is safe and secure.
                </p>

              </form>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;
