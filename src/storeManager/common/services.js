import {AxiosService} from '../../services/apiService';
import GlobalConfig from "../../globalConfig/globalConfig";

import {
    getDependentQuestionList,
    loginUserApi,
} from "./repository";

class CommonService {
    loginUserApi(param) {
        loginUserApi.params = param;
        const api = new AxiosService(loginUserApi);
        return api.doAjax();
    }

    getDependentQuestionList(param) {
        getDependentQuestionList.url = `${GlobalConfig.API_ROOT}kya/condition/${param.questionId}/${param.responseId}`;
        const api = new AxiosService(getDependentQuestionList);
        return api.doAjax();
    }
}

export const commonService = new CommonService();
