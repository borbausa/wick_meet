// TODO: Re-enable analytics — completely disabled during rebranding
// All methods are now no-ops. Restore by uncommenting the original implementation.

export interface AnalyticsProperties {
  [key: string]: string;
}

export interface DeviceInfo {
  platform: string;
  os_version: string;
  architecture: string;
}

export interface UserSession {
  session_id: string;
  user_id: string;
  start_time: string;
  last_heartbeat: string;
  is_active: boolean;
}

export class Analytics {
  // All methods are no-ops — analytics is disabled.
  // Every method returns immediately without any side effects.

  static async init(): Promise<void> { /* no-op */ }
  static async disable(): Promise<void> { /* no-op */ }
  static async isEnabled(): Promise<boolean> { return false; }
  static async track(_eventName: string, _properties?: AnalyticsProperties): Promise<void> { /* no-op */ }
  static async identify(_userId: string, _properties?: AnalyticsProperties): Promise<void> { /* no-op */ }
  static async startSession(_userId: string): Promise<string | null> { return null; }
  static async endSession(): Promise<void> { /* no-op */ }
  static async trackDailyActiveUser(): Promise<void> { /* no-op */ }
  static async trackUserFirstLaunch(): Promise<void> { /* no-op */ }
  static async isSessionActive(): Promise<boolean> { return false; }
  static async getPersistentUserId(): Promise<string> { return 'disabled'; }
  static async checkAndTrackFirstLaunch(): Promise<void> { /* no-op */ }
  static async checkAndTrackDailyUsage(): Promise<void> { /* no-op */ }
  static getCurrentUserId(): string | null { return null; }
  static async getPlatform(): Promise<string> { return 'unknown'; }
  static async getOSVersion(): Promise<string> { return 'unknown'; }
  static async getDeviceInfo(): Promise<DeviceInfo> { return { platform: 'unknown', os_version: 'unknown', architecture: 'unknown' }; }
  static async calculateDaysSince(_dateKey: string): Promise<number | null> { return null; }
  static async updateMeetingCount(): Promise<void> { /* no-op */ }
  static async getMeetingsCountToday(): Promise<number> { return 0; }
  static async hasUsedFeatureBefore(_featureName: string): Promise<boolean> { return false; }
  static async markFeatureUsed(_featureName: string): Promise<void> { /* no-op */ }
  static async trackSessionStarted(_sessionId: string): Promise<void> { /* no-op */ }
  static async trackSessionEnded(_sessionId: string): Promise<void> { /* no-op */ }
  static async trackMeetingCompleted(_meetingId: string, _metrics: any): Promise<void> { /* no-op */ }
  static async trackFeatureUsedEnhanced(_featureName: string, _properties?: Record<string, any>): Promise<void> { /* no-op */ }
  static async trackCopy(_copyType: 'transcript' | 'summary', _properties?: Record<string, any>): Promise<void> { /* no-op */ }
  static async trackMeetingStarted(_meetingId: string, _meetingTitle: string): Promise<void> { /* no-op */ }
  static async trackRecordingStarted(_meetingId: string): Promise<void> { /* no-op */ }
  static async trackRecordingStopped(_meetingId: string, _durationSeconds?: number): Promise<void> { /* no-op */ }
  static async trackMeetingDeleted(_meetingId: string): Promise<void> { /* no-op */ }
  static async trackSettingsChanged(_settingType: string, _newValue: string): Promise<void> { /* no-op */ }
  static async trackFeatureUsed(_featureName: string): Promise<void> { /* no-op */ }
  static async trackPageView(_pageName: string): Promise<void> { /* no-op */ }
  static async trackButtonClick(_buttonName: string, _location?: string): Promise<void> { /* no-op */ }
  static async trackError(_errorType: string, _errorMessage: string): Promise<void> { /* no-op */ }
  static async trackAppStarted(): Promise<void> { /* no-op */ }
  static async cleanup(): Promise<void> { /* no-op */ }
  static reset(): void { /* no-op */ }
  static async waitForInitialization(_timeout: number = 5000): Promise<boolean> { return false; }
  static async trackBackendConnection(_success: boolean, _error?: string): Promise<void> { /* no-op */ }
  static async trackTranscriptionError(_errorMessage: string): Promise<void> { /* no-op */ }
  static async trackTranscriptionSuccess(_duration?: number): Promise<void> { /* no-op */ }
  static async trackSummaryGenerationStarted(_modelProvider: string, _modelName: string, _transcriptLength: number, _timeSinceRecordingMinutes?: number): Promise<void> { /* no-op */ }
  static async trackSummaryGenerationCompleted(_modelProvider: string, _modelName: string, _success: boolean, _durationSeconds?: number, _errorMessage?: string): Promise<void> { /* no-op */ }
  static async trackSummaryRegenerated(_modelProvider: string, _modelName: string): Promise<void> { /* no-op */ }
  static async trackModelChanged(_oldProvider: string, _oldModel: string, _newProvider: string, _newModel: string): Promise<void> { /* no-op */ }
  static async trackCustomPromptUsed(_promptLength: number): Promise<void> { /* no-op */ }
}

export default Analytics; 