import Vue from 'vue';
import VueRouter from 'vue-router';

import Auth from './components/auth/Auth.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import App from './components/app/App.vue';

import Buildings from './components/app/Building/Buildings.vue';
import BuildingForm from './components/app/Building/BuildingForm.vue';
import BuildingDetail from './components/app/Building/BuildingDetail.vue';
import BuildingProblems from './components/app/Building/BuildingProblems.vue';
import BuildingRooms from './components/app/Building/BuildingRooms.vue';
import BuildingTennants from './components/app/Building/BuildingTennants.vue';

import Rooms from './components/app/Room/Rooms.vue';
import RoomForm from './components/app/Room/RoomForm.vue';
import RoomDetail from './components/app/Room/RoomDetail.vue';
import RoomProblems from './components/app/Room/RoomProblems.vue';

import Students from './components/app/Student/Students.vue';
import StudentForm from './components/app/Student/StudentForm.vue';
import StudentDetail from './components/app/Student/StudentDetail.vue';
import StudentProblems from './components/app/Student/StudentProblems.vue';

import Employees from './components/app/Employee/Employees.vue';
import EmployeeForm from './components/app/Employee/EmployeeForm.vue';
import EmployeeDetail from './components/app/Employee/EmployeeDetail.vue';

import Problems from './components/app/Problem/Problems.vue';
import ProblemForm from './components/app/Problem/ProblemForm.vue';
import ProblemDetail from './components/app/Problem/ProblemDetail.vue';

import Dashboard from './components/app/Dashboard/Dashboard.vue';

import Notifications from './components/app/Profile/Notifications.vue';
import Messages from './components/app/Profile/Messages.vue';
import PersonalInfo from './components/app/Profile/PersonalInfo.vue';

Vue.use(VueRouter);

var router = new VueRouter({
	routes: [
		{
			path: '/',
			component: App,
			redirect: '/dashboard',
			children: [
				/* Dashboard */
				{
					name: 'dashboard',
					path: 'dashboard',
					component: Dashboard,
					meta: { requiresAuth: true, title: 'Dashboard'},
				},

				/* Buildings */
				{
					name: 'buildings',
					path: 'buildings',
					component: Buildings,
					meta: { requiresAuth: true, title: 'Gebouwen'},
				},
				{
					name: 'buildingcreate',
					path: 'building/create',
					component: BuildingForm,
					meta: { requiresAuth: true, title: 'Gebouw aanmaken'}
				},
				{
					name: 'buildingupdate',
					path: 'building/update/:buildingId',
					component: BuildingForm,
					meta: { requiresAuth: true, title: 'Gebouw aanpassen'}
				},
				{
					name: 'buildingdetail',
					path: 'building/detail/:buildingId/dashboard',
					component: BuildingDetail,
					meta: { requiresAuth: true, title: 'Gebouw dashboard'},
				},
				{
					name: 'buildingproblems',
					path: 'building/detail/:buildingId/problems',
					component: BuildingProblems,
					meta: { requiresAuth: true, title: 'Gebouw meldingen'},
				},
				{
					name: 'buildingrooms',
					path: 'building/detail/:buildingId/rooms',
					component: BuildingRooms,
					meta: { requiresAuth: true, title: 'Gebouw verblijven'},
				},
				{
					name: 'buildingtennants',
					path: 'building/detail/:buildingId/tennants',
					component: BuildingTennants,
					meta: { requiresAuth: true, title: 'Gebouw huurders'},
				},
				
				/* Rooms */
				{
					name: 'rooms',
					path: 'rooms',
					component: Rooms,
					meta: { requiresAuth: true, title: 'Verblijven' }
				},
				{
					name: 'roomcreate',
					path: 'building/:buildingId/room/create',
					component: RoomForm,
					meta: { requiresAuth: true, title: 'Verblijf aanmaken' }
				},
				{
					name: 'roomupdate',
					path: 'building/:buildingId/room/update/:id',
					component: RoomForm,
					meta: { requiresAuth: true, title: 'Verblijf bewerken' }
				},
				{
					name: 'roomdetail',
					path: 'building/:buildingId/room/detail/:id',
					component: RoomDetail,
					meta: { requiresAuth: true, title: 'Verblijf dashboard' }
				},
				{
					name: 'roomproblems',
					path: 'building/:buildingId/room/detail/:id/problems',
					component: RoomProblems,
					meta: { requiresAuth: true, title: 'Verblijf meldingen' }
				},
				
				/* Students */
				{
					name: 'students',
					path: 'students',
					component: Students,
					meta: { requiresAuth: true, title: 'Huurders'}
				},
				{
					name: 'studentcreate',
					path: 'student/create',
					component: StudentForm,
					meta: { requiresAuth: true, title: 'Huurder aanmaken' }
				},
				{
					name: 'studentdetail',
					path: 'student/:studentId',
					component: StudentDetail,
					meta: { requiresAuth: true, title: 'Huurder detail'}
				},
				{
					name: 'studentproblems',
					path: 'student/:studentId/problems',
					component: StudentProblems,
					meta: { requiresAuth: true, title: 'Huurder meldingen'}
				},
				
				/* Employees */
				{
					name: 'employees',
					path: 'employees',
					component: Employees,
					meta: { requiresAuth: true, title: 'Gebouw aanmaken' }
				},
				{
					name: 'employeecreate',
					path: 'employee/create',
					component: EmployeeForm,
					meta: { requiresAuth: true, title: 'Gebouw aanmaken' }
				},
				{
					name: 'employeeupdate',
					path: 'employee/update/:id',
					component: EmployeeForm,
					meta: { requiresAuth: true, title: 'Gebouw aanmaken' }
				},
				{
					name: 'employeedetail',
					path: 'employee/:employeeId',
					component: EmployeeDetail,
					meta: { requiresAuth: true, title: 'Gebouw aanmaken' }
				},
				
				
				/* Problems */
				{
					name: 'problems',
					path: 'problems/:status?',
					component: Problems,
					meta: { requiresAuth: true, title: 'Meldingen' }
				},
				{
					name: 'problemcreate',
					path: 'problem/create',
					component: ProblemForm,
					meta: { requiresAuth: true, title: 'Melding toevoegen' }
				},
				{
					name: 'problemupdate',
					path: 'problem/update/:id',
					component: ProblemForm,
					meta: { requiresAuth: true, title: 'Melding update' }
				},
				{
					name: 'problemdetail',
					path: 'problem/:problemId',
					component: ProblemDetail,
					meta: { requiresAuth: true, title: 'Melding details' }
				},

				/* Notifications */
				{
					name: 'notifications',
					path: 'notifications',
					component: Notifications,
					meta: { requiresAuth: true, title: 'Notificaties' }
				},
				{
					name: 'messages',
					path: 'messages',
					component: Messages,
					meta: { requiresAuth: true, title: 'Berichten' }
				},
				{
					name: 'personalinfo',
					path: 'profile/personal',
					component: PersonalInfo,
					meta: { requiresAuth: true, title: 'Profiel bewerken'}
				},
			]
		},
		{
			path: "/auth",
			component: Auth,
			redirect: '/auth/login',
			children: [
				{
					name: "login",
					path: "login",
					component: Login,
					meta: { requiresGuest: true, title: 'Login' }
				},
				{
					path: "register",
					component: Register,
					meta: { requiresGuest: true, title: 'Registreer' }
				},
				{
					path: "register/:code",
					component: Register,
					meta: { requiresGuest: true, title: 'Registreer' }
				}
			]
		}
	]
});

export default router;