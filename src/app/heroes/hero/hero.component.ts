import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'iron Man';
  public age: number = 45;


  get capitalizeName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeAge():void {
    this.age = 20;
  }


  changeHero():void {
    this.name = 'Spiderman';
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
