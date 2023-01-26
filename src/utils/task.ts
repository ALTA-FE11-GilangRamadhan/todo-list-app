export interface Due {
  date?: string;
  isRecurring?: false;
  datetime?: string;
  string?: string;
  timezone?: string;
}

export interface Tasks {
  creatorId?: string;
  createdAt?: string;
  assigneeId?: string;
  assignerId?: string;
  commentCount?: number;
  isCompleted?: false;
  content?: string;
  description?: string;
  due?: {
    results: Due[];
  };
  id?: string;
  labels?: string[];
  order?: number;
  priority?: number;
  projectId?: string;
  sectionId?: string;
  parentId?: string;
  url?: string;
}
