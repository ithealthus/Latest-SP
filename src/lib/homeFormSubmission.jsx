export const contactFormSubmission = async (
  name,
  phone,
  email,
  message
) => {
  try {
    const response = await fetch(
      "https://spmedifort.com/news-and-resources/wp-json/custom/v1/submit-contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          message
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
