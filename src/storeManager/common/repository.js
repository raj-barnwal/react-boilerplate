import GlobalConfig from '../../globalConfig/globalConfig';

export const loginUserApi = {
    method: 'POST',
    url: `${GlobalConfig.API_ROOT}auth/authenticate`,
    headers: GlobalConfig.getHeaders(['JSON']),
};

export const getDependentQuestionList = {
    method: 'GET',
    url: `${GlobalConfig.API_ROOT}kya/condition/`,
    headers: GlobalConfig.getHeaders(['JSON']),
};
