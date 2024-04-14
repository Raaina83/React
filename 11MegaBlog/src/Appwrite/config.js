import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImg, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwritedatabseId, 
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error : ", error);
        }
    }

    async updatePost(slug, {title, content, featuredImg, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwritedatabseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImg,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error : ", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwritedatabseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error : ", error);
            return false;
        }
    }

    async getOnePost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwritedatabseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error : ", error);
            return false
        }
    }

    async getActivePosts(queries = [Query.equal("status", "active")]){
        try {
            await this.databases.listDocuments(
                conf.appwritedatabseId,
                conf.appwriteCollectionId,
                [
                    queries
                ]
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error : ", error);
        }
    }

    //FILE UPLOAD

    async uploadFile(){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error : ", error);
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error : ", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service();
export default service;