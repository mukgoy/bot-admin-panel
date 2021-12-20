import { ChatService } from '@adminpanel/services/chat.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { StoreService } from '@shared/services/store.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  constructor(
    private chatService: ChatService,
    private store: StoreService
  ) { }

  // clients = [];
  jobs:any = []
  agents:any[] = []
  candidates:any[] = []

  walkinId = ""
  chatBotChats = {
    offset : 0,
    loading : false,
  }
  ngOnInit(): void {
    this.chatService.fetchAllClientsAndJobs()
    .subscribe((res:any)=>{
      this.jobs = res.response.jobs
      // this.clients = res.response.clients
    })
  }

  @HostListener('scroll', ['$event'])
  handleScrollUpCandidates(event: any) {
      if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight-1) {
        this.fetchChatBotChats()
        console.log("scroll end");
      }
  }

  onChangeWalkinId(){
    this.store.walkinId.next(this.walkinId);
    this.chatBotChats.offset = 0;
    this.fetchChatBotChats()
    this.getAllRecruitersAssignedToJob()
  }

  fetchChatBotChats(){
    let body = {
      "walkinId": this.walkinId,
      "offset": this.chatBotChats.offset
    };
    this.chatBotChats.loading = true;
    this.chatService.fetchChatBotChats(body)
    .subscribe((res:any)=>{
      this.chatBotChats.offset += 25
      this.candidates = this.candidates.concat(res.response)
      this.chatBotChats.loading = false;
    });
  }

  getAllRecruitersAssignedToJob(){
    this.chatService.getAllRecruitersAssignedToJob()
    .subscribe((res:any)=>{
      this.agents = res.response
    });
  }

}
