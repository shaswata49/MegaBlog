//Authetication snippets and connection with Appwrite Auth System. 

import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

//Create an authentication service for reusable capabilities.

export class AuthService{
    client = new Client();
    account;

    //Create constructer and connect with Appwrite only when new Object of AuthService is created, as everytime it's not need to connect with Appwrite
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        
        this.account = new Account(this.client);

        // console.log(this.account); 
    }

    // Account creation menthod (Wrapper for Appwrite account creation). Using Asyn because after account creation only we proceed further.
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                this.login({email,password})
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    //Login Method

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    //isLogin Method

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
           console.log("Appwrite service :: getCurrentUser :: error", error);
        }

        return null;
    }

    //Logout Method

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

//Create Object here only so at the time of using, no need to create new instensce.
const authService = new AuthService();

export default authService;