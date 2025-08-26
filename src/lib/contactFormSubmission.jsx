export const contactFormSubmission = async (
  name,
  phone,
  email,
  query ={message},
  department_name,
  department_url
) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BLOGS}/wp-json/custom/v1/submit-department`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          query,
          department_name,
          department_url
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();

    return {
      ok: true,
      status: 200,
      message: "Contact form submitted successfully",
      data: result,
    };
  } catch (error) {
    const errMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    return {
      ok: false,
      status: 500,
      message: "Internal Server Error",
      error: errMessage,
    };
  }
};
