import { Component, OnInit } from "@angular/core"; 
@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  
  parentMessage = "This is a message from parent"
  constructor() { }

  ngOnInit(): void {}
}
