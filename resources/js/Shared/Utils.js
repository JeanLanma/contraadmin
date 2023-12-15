// Desc: Shared utility functions

// Format user name cut off at 18 characters
export const FormatUserName = (userName) => {
    return userName.length > 18 ? userName.substring(0, 18) + '...' : userName;
};