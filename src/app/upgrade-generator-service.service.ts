import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * This service is used to generate upgrades as they are needed by the user
 * as a user buys an upgrade we need to replace the purchased upgrade with a
 * newer and more effective upgrade. 
 * 
 * The generated upgrade needs to have its price scale with the amount of money 
 * user makes in a click
*/
export class UpgradeGeneratorServiceService {

  constructor() { }
}
