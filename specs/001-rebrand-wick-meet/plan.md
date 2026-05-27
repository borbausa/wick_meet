# Implementation Plan: Rebrand to Wick Meet

**Branch**: `001-rebrand-wick-meet` | **Date**: 2026-05-26 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `/specs/001-rebrand-wick-meet/spec.md`

## Summary

Replace all user-facing references to "Meetily" with "Wick Meet" across the Tauri desktop app, UI components, system notifications, documentation, and configuration files. The bundle identifier remains `com.meetily.ai` — no data migration required. Purely cosmetic changes to display names and UI strings.

## Technical Context

**Language/Version**: Rust 1.77+, TypeScript 5.x (Next.js 14), Python 3.11+

**Primary Dependencies**: Tauri 2.x, React 18, Next.js 14, FastAPI (backend)

**Storage**: SQLite (local), IndexedDB (browser recovery — unchanged)

**Testing**: Visual verification only (spec: "minimal testing — verify the app builds and launches")

**Target Platform**: macOS, Windows, Linux (Tauri desktop)

**Project Type**: Desktop application (Tauri + Next.js)

**Performance Goals**: No performance impact — text replacement only

**Constraints**: Bundle ID `com.meetily.ai` MUST NOT change; infrastructure URLs MUST NOT change

**Scale/Scope**: ~45 files across config, frontend, Rust, and docs

## Constitution Check

*Pre-Research Gate:*

| Principle | Impact | Assessment |
|---|---|---|
| Privacy-First | None | No data handling changes |
| Local-First | None | No network changes |
| Test-First | N/A | Spec calls for minimal testing (build + launch only) |
| Observability | None | No behavioral changes |
| Simplicity | Aligned | Simplest possible implementation — text replacement |

*Post-Design Re-Check: No new violations introduced.*

## Project Structure

### Documentation (this feature)

```text
specs/001-rebrand-wick-meet/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── spec.md              # Feature specification
└── tasks.md             # Phase 2 output (speckit-tasks)
```

### Source Code (affected files)

```text
# Configuration (identity)
frontend/src-tauri/tauri.conf.json      # productName, title
frontend/src-tauri/Cargo.toml           # name, description
frontend/package.json                   # name

# Frontend UI Components (user-facing strings)
frontend/src/app/metadata.ts            # Page title, metadata
frontend/src/app/metadata.tsx           # Page title, metadata
frontend/src/components/About.tsx       # About dialog title
frontend/src/components/Logo.tsx        # Logo alt text, feature heading
frontend/src/components/Sidebar/index.tsx  # Brand text
frontend/src/components/PreferenceSettings.tsx  # Analytics description
frontend/src/components/PermissionWarning.tsx  # Permission text
frontend/src/components/Info.tsx        # About dialog
frontend/src/components/AnalyticsConsentSwitch.tsx  # Analytics text
frontend/src/components/BluetoothPlaybackWarning.tsx  # Warning text
frontend/src/components/TranscriptView.tsx  # Meeting references
frontend/src/components/VirtualizedTranscriptView.tsx  # Meeting references

# Onboarding Flow (P1 — first thing new users see)
frontend/src/components/onboarding/OnboardingFlow.tsx
frontend/src/components/onboarding/steps/WelcomeStep.tsx
frontend/src/components/onboarding/steps/SetupOverviewStep.tsx
frontend/src/components/onboarding/steps/PermissionsStep.tsx
frontend/src/components/onboarding/steps/DownloadProgressStep.tsx

# Context & Services
frontend/src/contexts/OnboardingContext.tsx
frontend/src/lib/analytics.ts           # Session storage key
frontend/src/services/indexedDBService.ts  # DB name (RETAIN)

# Database Import Components
frontend/src/components/DatabaseImport/HomebrewDatabaseDetector.tsx
frontend/src/components/DatabaseImport/LegacyDatabaseImport.tsx

# Rust System-Level (user-facing)
frontend/src-tauri/src/tray.rs          # Tray tooltip
frontend/src-tauri/src/notifications/commands.rs  # Notification app name
frontend/src-tauri/src/notifications/types.rs  # Notification factory methods

# Documentation
README.md                               # Product name (25 refs)
CONTRIBUTING.md                         # Product name
PRIVACY_POLICY.md                       # Product name (4 refs)

# Rust Internal (RETAIN — data paths, comments, internal IDs)
frontend/src-tauri/src/whisper_engine/whisper_engine.rs    # Model path
frontend/src-tauri/src/notifications/settings.rs           # Data path
frontend/src-tauri/src/audio/recording_preferences.rs      # Recording path
frontend/src-tauri/src/audio/decoder.rs                    # Temp file prefix
frontend/src-tauri/src/audio/capture/core_audio.rs         # Audio thread name
frontend/src-tauri/src/summary/templates/loader.rs         # Template path
frontend/src-tauri/src/summary/templates/mod.rs            # Comments
frontend/src-tauri/src/lib_old_complex.rs                  # Legacy code
frontend/src-tauri/src/summary/summary_engine/*.rs         # Comments
frontend/src-tauri/src/console_utils/console_utils.rs      # Log messages
frontend/src-tauri/src/parakeet_engine/parakeet_engine.rs  # Comments
```

**Structure Decision**: Changes are distributed text replacements across existing files. No new files or directories needed. No structural changes required.

## Complexity Tracking

Not applicable — no constitution violations. This is a straightforward text replacement across user-facing strings.
