const baseUrl =
  "https://api.telegram.org/bot6830915900:AAGMLT144_LZA6JNxfRERXmiSvjrX91AhNc/";

export const sendMessage = async (message) => {
  const url = `${baseUrl}sendMessage?chat_id=-1002088114199&text=${message}`;
  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.json();

    await Promise.reject(error.description || "Щось не так(");
  }

  console.log("response", response);
};
