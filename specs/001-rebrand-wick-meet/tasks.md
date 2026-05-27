# Tasks: Rebrand to Wick Meet

**Input**: Design documents from `/specs/001-rebrand-wick-meet/`

**Prerequisites**: plan.md (complete), spec.md (4 user stories)

**Tests**: Not requested — spec calls for minimal testing (build + launch verification)

**Organization**: Tasks organized by user story for independent verification.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to
- Include exact file paths in descriptions

## Path Conventions

All paths relative to the `meetily/` project root.

---

## Phase 1: Configuration Identity (Shared Infrastructure)

**Purpose**: Update product name in configuration files — these define the app's identity everywhere Tauri/Next.js uses it.

- [ ] T001 Update `frontend/src-tauri/tauri.conf.json` — change `productName` from "meetily" to "Wick Meet" and `title` from "meetily" to "Wick Meet"
- [ ] T002 [P] Update `frontend/src-tauri/Cargo.toml` — change `name` from "meetily" to "wick-meet" and `description` to reference "Wick Meet"
- [ ] T003 [P] Update `frontend/package.json` — change `name` from "meetily" to "wick-meet"

**Checkpoint**: Config files updated. All subsequent UI changes will pick up new identity from these configs.

---

## Phase 2: Foundational UI (Blocking Prerequisites)

**Purpose**: Core UI components that every user sees immediately — must be complete before user stories.

- [ ] T004 Update `frontend/src/app/metadata.ts` — replace "Meetily" in page title and metadata
- [ ] T005 Update `frontend/src/app/metadata.tsx` — replace "Meetily" in page title and metadata
- [ ] T006 [P] Update `frontend/src/components/Logo.tsx` — change alt text, feature heading from "Meetily" to "Wick Meet"
- [ ] T007 [P] Update `frontend/src/components/Sidebar/index.tsx` — change brand text from "Meetily" to "Wick Meet"
- [ ] T008 [P] Update `frontend/src-tauri/src/tray.rs` — change tray tooltip from "Meetily" to "Wick Meet"

**Checkpoint**: App shell displays "Wick Meet" in window title, sidebar, logo area, and system tray.

---

## Phase 3: User Story 1 - New users see consistent Wick Meet brand (Priority: P1) 🎯 MVP

**Goal**: A new user installs and opens the app — every surface displays "Wick Meet" with zero trace of "Meetily."

**Independent Test**: Build the app, do a fresh install, verify all surfaces show "Wick Meet."

### Implementation

- [ ] T009 [P] [US1] Update `frontend/src/components/About.tsx` — change "About Meetily" dialog title and product name
- [ ] T010 [P] [US1] Update `frontend/src/components/Info.tsx` — change "About Meetily" references
- [ ] T011 [P] [US1] Update `frontend/src/components/AnalyticsConsentSwitch.tsx` — replace "Meetily" in analytics consent text
- [ ] T012 [P] [US1] Update `frontend/src/components/BluetoothPlaybackWarning.tsx` — replace "Meetily" references
- [ ] T013 [P] [US1] Update `frontend/src/components/PermissionWarning.tsx` — replace "Meetily" in permission warning text
- [ ] T014 [P] [US1] Update `frontend/src/components/PreferenceSettings.tsx` — replace "Meetily" in preference descriptions
- [ ] T015 [P] [US1] Update `frontend/src/components/TranscriptView.tsx` — replace "Meetily" references
- [ ] T016 [P] [US1] Update `frontend/src/components/VirtualizedTranscriptView.tsx` — replace "Meetily" references
- [ ] T017 [US1] Update `frontend/src/components/onboarding/OnboardingFlow.tsx` — replace "Meetily" in onboarding container
- [ ] T018 [P] [US1] Update `frontend/src/components/onboarding/steps/WelcomeStep.tsx` — change "Welcome to Meetily" heading
- [ ] T019 [P] [US1] Update `frontend/src/components/onboarding/steps/SetupOverviewStep.tsx` — replace "Meetily" references
- [ ] T020 [P] [US1] Update `frontend/src/components/onboarding/steps/PermissionsStep.tsx` — replace "Meetily" in permission instructions
- [ ] T021 [P] [US1] Update `frontend/src/components/onboarding/steps/DownloadProgressStep.tsx` — replace "Meetily" references
- [ ] T022 [P] [US1] Update `frontend/src/contexts/OnboardingContext.tsx` — replace "Meetily" references
- [ ] T023 [US1] Update `frontend/src-tauri/src/notifications/types.rs` — change notification app name from "Meetily" to "Wick Meet" in all factory methods
- [ ] T024 [P] [US1] Update `frontend/src-tauri/src/notifications/commands.rs` — change notification title from "Meetily" to "Wick Meet"
- [ ] T025 [P] [US1] Update `frontend/src/lib/analytics.ts` — change session storage key from `meetily_user_id` to `wickmeet_user_id`
- [ ] T026 [P] [US1] Update `frontend/src/components/DatabaseImport/HomebrewDatabaseDetector.tsx` — replace "Meetily" references
- [ ] T027 [P] [US1] Update `frontend/src/components/DatabaseImport/LegacyDatabaseImport.tsx` — replace "Meetily" references

**Checkpoint**: At this point, User Story 1 is fully functional — a new user sees "Wick Meet" on every surface including onboarding, notifications, and all UI elements.

---

## Phase 4: User Story 2 - Existing users see new brand with zero disruption (Priority: P1)

**Goal**: An existing user upgrades — all data remains accessible, only the display name changes.

**Independent Test**: Verify that no data paths, bundle ID, or storage names were changed.

### Verification

- [ ] T028 [US2] Verify `tauri.conf.json` — confirm `identifier` remains `com.meetily.ai` (unchanged)
- [ ] T029 [P] [US2] Verify `frontend/src/services/indexedDBService.ts` — confirm `MeetilyRecoveryDB` is retained (unchanged)
- [ ] T030 [P] [US2] Verify `frontend/src-tauri/src/audio/recording_preferences.rs` — confirm `meetily-recordings` path is retained
- [ ] T031 [P] [US2] Verify `frontend/src-tauri/src/whisper_engine/whisper_engine.rs` — confirm model data path uses existing directory
- [ ] T032 [P] [US2] Verify `frontend/src-tauri/src/notifications/settings.rs` — confirm notification data path is retained
- [ ] T033 [P] [US2] Verify `frontend/src-tauri/src/summary/templates/loader.rs` — confirm template path is retained
- [ ] T034 [P] [US2] Verify updater endpoints in `tauri.conf.json` remain unchanged (GitHub URL intact)

**Checkpoint**: All data paths confirmed unchanged. Existing user upgrade is zero-disruption.

---

## Phase 5: User Story 3 - Project documentation reflects new brand (Priority: P2)

**Goal**: All project documentation uses "Wick Meet" — contributors see the new brand on first contact.

**Independent Test**: Grep for "Meetily" in documentation files — should return zero.

### Implementation

- [ ] T035 [P] [US3] Update `README.md` — replace all 25 "Meetily" references with "Wick Meet"
- [ ] T036 [P] [US3] Update `CONTRIBUTING.md` — replace "Meetily" references
- [ ] T037 [P] [US3] Update `PRIVACY_POLICY.md` — replace 4 "Meetily" references with "Wick Meet"

**Checkpoint**: All public documentation uses "Wick Meet" branding.

---

## Phase 6: User Story 4 - Backend service reflects new brand (Priority: P3)

**Goal**: Backend documentation and scripts use "Wick Meet" name.

**Independent Test**: Grep for "Meetily" in backend files — should return zero.

### Verification

- [ ] T038 [US4] Scan `backend/` for remaining "Meetily" references — confirmed zero from research

**Checkpoint**: Backend has no user-facing "Meetily" references. No changes needed.

---

## Phase 7: Polish & Verification

**Purpose**: Final verification and cleanup.

- [ ] T039 Build verification — run `pnpm run tauri:build` and confirm no compilation errors
- [ ] T040 [P] Final grep — `grep -ri "meetily" frontend/src/ frontend/src-tauri/src/ README.md CONTRIBUTING.md PRIVACY_POLICY.md` — verify only internal/retained references remain
- [ ] T041 Update `meetily/CLAUDE.md` — replace "Meetily" project description with "Wick Meet"
- [ ] T042 Run app and visually verify: window title, sidebar, About dialog, onboarding flow, tray tooltip, system notifications

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Config)**: No dependencies — start immediately
- **Phase 2 (Foundational UI)**: Depends on Phase 1 — config values feed window titles and metadata
- **Phase 3 (US1)**: Depends on Phase 2 — all remaining user-facing strings
- **Phase 4 (US2)**: No dependency — verification only, can run in parallel with Phase 3
- **Phase 5 (US3)**: No dependency — docs are independent
- **Phase 6 (US4)**: No dependency — verification only
- **Phase 7 (Polish)**: Depends on all previous phases

### Parallel Opportunities

- Phase 1: T002 and T003 are independent of T001
- Phase 2: T006-T008 are independent of T004-T005
- Phase 3 (US1): T009-T016 are all independent (different files). T018-T021 are independent (onboarding steps). T023-T025 are independent.
- Phase 5 (US3): T035-T037 are fully independent

### Within Each Phase

- Config files first (identity propagates to window titles, etc.)
- App metadata next (page title, browser tab)
- UI components (independent — parallelize)
- Onboarding flow (group together — related context)
- System notifications (group together — Rust context)
- Docs last (independent — parallelize)

---

## Implementation Strategy

### MVP First (Phases 1-3)

1. Phase 1: Config identity (3 files)
2. Phase 2: Foundational UI (5 files)
3. Phase 3: All user-facing strings (~20 files)
4. **STOP and VALIDATE**: Build and run — verify new user sees "Wick Meet" everywhere
5. This is the MVP — new users get complete rebrand experience

### Incremental Delivery

6. Phase 4: Verify zero-disruption for existing users
7. Phase 5: Update documentation
8. Phase 6: Verify backend
9. Phase 7: Final build verification

### Total Task Count

- Phase 1: 3 tasks
- Phase 2: 5 tasks
- Phase 3: 19 tasks
- Phase 4: 7 verification tasks
- Phase 5: 3 tasks
- Phase 6: 1 verification task
- Phase 7: 4 tasks
- **Total: 42 tasks**
