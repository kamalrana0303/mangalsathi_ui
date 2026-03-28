import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile {
  userProfileModel = signal<UserProfile>({} as UserProfile);


}
