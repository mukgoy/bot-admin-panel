import { Injectable } from '@angular/core';
import { javaApis, javaHost, userConfig } from '@shared/configs';
import { ApiHttpService } from '@shared/services/api-http.service';
import { StoreService } from '@shared/services/store.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  walkinId = 14168699;
  constructor(
    private http: ApiHttpService,
    private store: StoreService
  ) { }

  fetchAllClientsAndJobs(){
    let orgId = userConfig.orgId;
    let url = javaHost + javaApis.chatbot.fetchAllClientsAndJobs
    return this.http.get(url, { orgId });
  }

  fetchChatBotChats(body:any){
    body = {
      "walkinId": this.store.walkinId.value,
      "limit": 25,
      "offset": 0,
      "orgId": userConfig.orgId,
      "flowId": userConfig.flowId,
      "inappropriateStatus": "all",
      ...body
    };
    let url = javaHost + javaApis.chatbot.fetchChatBotChats
    return this.http.post(url, body);
  }

  getAllRecruitersAssignedToJob(){
    let formdata = new FormData();
    formdata.append("walkinId", this.store.walkinId.value)
    let url = javaHost + javaApis.chatbot.getAllRecruitersAssignedToJob
    return this.http.post(url, formdata);
  }

}
