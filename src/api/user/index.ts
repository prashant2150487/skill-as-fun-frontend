import axiosInstance from "../axios";



export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  // Add more fields based on your API response
}
interface userResponse {
    message: string;
    user: UserProfile;
}

export const fetchUserProfile = async (): Promise<UserProfile> => {
  try {
    const response = await axiosInstance.get<userResponse>('auth/meta/user');
    console.log(response.data, "user profile");
    return response.data.user;
  } catch (error: unknown) {
    console.error('Failed to fetch user profile:', error);
    throw new Error('Failed to fetch user profile');
  }
};
