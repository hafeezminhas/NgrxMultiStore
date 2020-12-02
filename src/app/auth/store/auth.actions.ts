import { Action, createReducer, on, createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Credentials } from './../models/user';
import { User } from './../../auth/models/user';

export enum AuthActionTypes {
  INIT_AUTH     = '[Auth] INIT AUTH',
  LOGIN_REQUEST = '[Auth] Login Request',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGIN_SUCCESS = '[Auth] Login Success',
  UPDATE_TOKEN  = '[Auth] Update Token',
  UPDATE_PROFILE = '[Auth] Update Token',
  REFRESH_TOKEN = '[Auth] Refresh Token',
  REFRESH_FAILURE = '[Auth] Refresh FAILURE',
  LOGOUT_ACTION = '[Auth] Logout Action'
}

export class AuthActions {
  public static InitAction = createAction(
    AuthActionTypes.INIT_AUTH
  );

  public static LoginRequestAction = createAction(
    AuthActionTypes.LOGIN_REQUEST,
    props<{ credentials: Credentials }>()
  );

  public static LoginFailureAction = createAction(
    AuthActionTypes.LOGIN_FAILURE,
    props<{ error: string }>()
  );

  public static LoginSuccessAction = createAction(
    AuthActionTypes.LOGIN_SUCCESS,
    props<{ user: User, token: string, refresh: string, isLoading: boolean }>()
  );

  public static UpdateTokenAction = createAction(
    AuthActionTypes.UPDATE_TOKEN,
    props<{ token: string }>()
  );

  public static UpdateProfileAction = createAction(
    AuthActionTypes.UPDATE_PROFILE,
    props<{ user: any }>()
  );

  public static RefreshTokenAction = createAction(
    AuthActionTypes.REFRESH_TOKEN,
    props<{ refreshToken: string }>()
  );

  public static RefreshTokenFailureAction = createAction(
    AuthActionTypes.REFRESH_FAILURE,
    props<{ response: HttpErrorResponse }>()
  );

  public static LogoutAction = createAction(
    AuthActionTypes.LOGOUT_ACTION
  );
}

// export class LoginRequestAction implements Action {
//   readonly type = AuthActionTypes.LOGIN_REQUEST;
//   constructor(public payload: { email: string, password: string }) {}
// }

// export class LoginFailureAction implements Action {
//   readonly type = AuthActionTypes.LOGIN_FAILURE;
//   constructor(public payload: { error: string }) {}
// }

// export class LoginSuccessAction implements Action {
//   readonly type = AuthActionTypes.LOGIN_SUCCESS;
//   constructor(public payload: { user: User, token: string, refresh: string, isLoading: boolean }) {}
// }

// export class UpdateTokenAction implements Action {
//   readonly type = AuthActionTypes.UPDATE_TOKEN;
//   constructor(public payload: { token: string }) {}
// }

// export class RefreshTokenAction implements Action {
//   readonly type = AuthActionTypes.REFRESH_TOKEN;
//   constructor(public payload: { refreshToken: string }) {}
// }

// export class RefreshTokenFailureAction implements Action {
//   readonly type = AuthActionTypes.REFRESH_FAILURE;
//   constructor(public payload: { response: HttpErrorResponse }) {}
// }

// export class LogoutAction implements Action {
//   readonly type = AuthActionTypes.LOGOUT_ACTION;
//   constructor() {}
// }

// export type Actions = LoginRequestAction | LoginFailureAction | LoginSuccessAction | UpdateTokenAction | RefreshTokenAction | LogoutAction;
