export type Platform = 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'threads';

export interface LinkedAccount {
  $id: string;
  user_id: string;
  platform: Platform;
  provider_id: string;
  access_token: string;
  refresh_token?: string;
  token_expiry: string;
  avatar_url?: string;
}

export interface Post {
  $id: string;
  user_id: string;
  content_text: string;
  media_ids: string[];
  status: 'draft' | 'processing' | 'published' | 'partial_failure';
  scheduled_at?: string;
  $createdAt: string;
  $updatedAt: string;
}

export interface DispatchJob {
  $id: string;
  post_id: string;
  platform: Platform;
  status: 'pending' | 'success' | 'failed';
  response_log?: string;
  retry_count: number;
  $createdAt: string;
}
