export const feHost = "/"
export const nodeHost = "/"
export const javaHost = "https://api.hrbot.co/"
export const nodeApis = {
    auth: {
        login: "auth/login",
        socialLogin: "auth/social-login"
    },
    admin: {
    }
}
export const javaApis = {
    auth: {
        addUpdateUser: "walkinapp/api/userSvc/v2/addUpdateUser"
    },
    chatbot: {
        fetchAllClientsAndJobs: "walkinapp/api/chatbot/messageTemplate/fetchAllClientsAndJobs",
        fetchChatBotChats: "walkinapp/api/chatsView/fetchChatBotChats",
        getAllRecruitersAssignedToJob: "walkinapp/api/recJobData/getAllRecruitersAssignedToJob"
    }
}

export const userConfig = {
    orgId: 21,
    flowId: 1
}