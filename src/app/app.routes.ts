import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'student-dashboard', component: StudentDashboardComponent , canActivate: [authGuard] },
    { path: 'company-dashboard', component: CompanyDashboardComponent , canActivate: [authGuard] },
    { path: 'admin-dashboard', component: AdminDashboardComponent , canActivate: [authGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
