import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    res
      .status(400)
      .json({ status: "error", message: "All fields are required" });
  }

  const mailIt = async () => {
    let transporter = nodemailer.createTransport({
      host: "marsianog.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    // send mail with defined transport object
    await transporter.sendMail({
      from: `"MARSian Bot" <${process.env.EMAIL_USER}>`, // sender address
      to: "rodrigo@marsianog.com", // list of receivers
      subject: "From contact-me section on marsianog.com", // Subject line
      text: `${message}\n\nFrom: ${name}\nEmail: ${email}`, // plain text body
      html: `<b>Message Body: </b><br>"<em>${message}</em>"<br><br><b>Form: </b>${name}<br><b>Email: </b> ${email}`, // plain text body
    });

    return res
      .status(200)
      .json({ status: "success", message: "Thank you for contacting us" });
  };
  if (req.method === "POST") {
    try {
      await mailIt();
    } catch (e) {
      res
        .status(500)
        .json({ status: "error", message: "Something went wrong" });
    }
  } else {
    res.status(405).json({
      status: "error",
      message: `Method ${req.method} not supported for this endpoint`,
    });
  }
};
