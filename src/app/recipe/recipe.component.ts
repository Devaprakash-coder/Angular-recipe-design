import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  data: any;
  
  constructor(public servService: ServService, private router:Router) {
    }

  ngOnInit(): void {
    
  }
  show(value:any){
    if(value==""){
      alert("Try Some Ingredients")
    }else{
      this.servService.getdata(value)  
      this.router.navigate(['/result']);
    }
    
    
  }
}


