import axios from "axios";

export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete("/api/user/delete-user", {
      data: { id },
    });

    if (response.status === 200) {
      console.log("User deleted successfully");
    } else {
      console.error("Failed to delete user:", response.data.error);
    }
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
