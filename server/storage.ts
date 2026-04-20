import { type User, type InsertUser, type ContactSubmission, type InsertContact } from "@shared/schema";
import { UserModel, ContactSubmissionModel } from "./models";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MongoStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const user = await UserModel.findById(id).lean();
    if (!user) return undefined;
    return { ...user, id: user._id.toString() } as User;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const user = await UserModel.findOne({ username }).lean();
    if (!user) return undefined;
    return { ...user, id: user._id.toString() } as User;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user = await UserModel.create(insertUser);
    return { 
      username: user.username,
      password: user.password || "",
      id: user._id.toString() 
    } as User;
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const submission = await ContactSubmissionModel.create(insertContact);
    return {
      name: submission.name,
      email: submission.email,
      message: submission.message,
      id: submission._id.toString()
    } as ContactSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    const submissions = await ContactSubmissionModel.find().lean();
    return submissions.map(sub => ({
      name: sub.name,
      email: sub.email,
      message: sub.message,
      id: sub._id.toString()
    })) as ContactSubmission[];
  }
}

export const storage = new MongoStorage();
