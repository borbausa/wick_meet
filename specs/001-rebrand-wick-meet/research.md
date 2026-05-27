# Research: Rebrand to Wick Meet

**Date**: 2026-05-26
**Phase**: 0 (Research)

## Decision: No Data Migration Required

**Rationale**: The Tauri bundle identifier stays `com.meetily.ai`, so the app data directory path remains identical on all platforms. Existing user data (meetings, settings, models) stays in place without migration.

**Alternatives considered**: Changing bundle ID to `com.wick.meet` — rejected per project decision to avoid data migration risk.

## Decision: IndexedDB Name Retained

**Rationale**: `MeetilyRecoveryDB` is internal browser-side storage for crash recovery. Changing it would lose recovery data on upgrade. Out of scope per spec.

## Decision: File Paths Retained

**Rationale**: Recording save paths (`meetily-recordings` in ~/Music, ~/Movies), model paths (`Meetily` subdirectory), and template paths all use hardcoded directory names. Changing these would break existing user file discovery. All retained per spec.

## Decision: Infrastructure Unchanged

**Rationale**: GitHub repo (`Zackriya-Solutions/meeting-minutes`), S3 bucket (`s3://meetily-updates/`), domains (`meetily.ai`) retain current names per spec assumptions. No updater endpoint changes needed.

## Codebase Inventory

Complete scan of all "meetily" references (case-insensitive):

### User-Facing Strings (CHANGE)

| Category | Files | Details |
|---|---|---|
| Config identity | `tauri.conf.json` (productName, title) | "meetily" -> "Wick Meet" |
| Config identity | `Cargo.toml` (name, description) | "meetily" -> "wick-meet" |
| Config identity | `frontend/package.json` (name) | "meetily" -> "wick-meet" |
| UI components | 9 TSX files | About, Logo, Sidebar, PreferenceSettings, PermissionWarning, Info, AnalyticsConsentSwitch, BluetoothPlaybackWarning, TranscriptView |
| Onboarding flow | 5 TSX files | WelcomeStep, SetupOverviewStep, PermissionsStep, DownloadProgressStep, OnboardingFlow |
| System notifications | `tray.rs`, `notifications/types.rs`, `notifications/commands.rs` | Tooltip, notification app name |
| Analytics | `analytics.ts` | Session storage key `meetily_user_id` -> `wickmeet_user_id` |
| Docs | README (25 refs), CONTRIBUTING (1), PRIVACY_POLICY (4) | Product name updates |

### Internal Strings (RETAIN)

| Category | Files | Details |
|---|---|---|
| Data paths | `whisper_engine.rs`, `notifications/settings.rs` | `path.push("Meetily")` — model storage path |
| Recording paths | `recording_preferences.rs` | `meetily-recordings` directory name |
| Template paths | `templates/loader.rs`, `templates/mod.rs` | `path.push("Meetily")` — comment + code |
| Internal IDs | `indexedDBService.ts` | `MeetilyRecoveryDB` — browser storage |
| Audio internals | `core_audio.rs` | macOS audio tap thread name |
| Audio internals | `decoder.rs` | Temp file prefix `.meetily_decode_` |
| Legacy code | `lib_old_complex.rs` | Not active (unused code) |
| Summary engine | `models.rs`, `sidecar.rs`, `model_manager.rs` | Comments only |
| Console utils | `console_utils.rs` | Internal log messages |
| Parakeet engine | `parakeet_engine.rs` | Internal comments |

### Backend (NO CHANGES)

Zero "meetily" references in Python backend files.

### Build Scripts (NO CHANGES)

Zero "meetily" references in shell/PowerShell/batch scripts.
