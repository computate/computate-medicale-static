
// POST //

async function postMedicalPatient($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			addError($formValues.next('button'));
		};
	}

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valuePatientFirstName = $formValues.find('.valuePatientFirstName').val();
	if(valuePatientFirstName != null && valuePatientFirstName !== '')
		vals['patientFirstName'] = valuePatientFirstName;

	var valueFamilyName = $formValues.find('.valueFamilyName').val();
	if(valueFamilyName != null && valueFamilyName !== '')
		vals['familyName'] = valueFamilyName;

	var valuePatientFirstNamePreferred = $formValues.find('.valuePatientFirstNamePreferred').val();
	if(valuePatientFirstNamePreferred != null && valuePatientFirstNamePreferred !== '')
		vals['patientFirstNamePreferred'] = valuePatientFirstNamePreferred;

	var valuePatientBirthDate = $formValues.find('.valuePatientBirthDate').val();
	if(valuePatientBirthDate != null && valuePatientBirthDate !== '')
		vals['patientBirthDate'] = valuePatientBirthDate;

	var valueEnrollmentKeys = [];
	$formValues.find('input.valueEnrollmentKeys:checked').each(function(index) {
		valueEnrollmentKeys.push($(this).val());
	});
	if(valueEnrollmentKeys.length > 0)
		vals['enrollmentKeys'] = valueEnrollmentKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	$.ajax({
		url: '/api/patient'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postMedicalPatientVals(vals, success, error) {
	$.ajax({
		url: '/api/patient'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportMedicalPatient($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportMedicalPatientVals(JSON.parse(json), success, error);
}

function putimportMedicalPatientVals(json, success, error) {
	$.ajax({
		url: '/api/patient/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeMedicalPatient($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeMedicalPatientVals(JSON.parse(json), success, error);
}

function putmergeMedicalPatientVals(json, success, error) {
	$.ajax({
		url: '/api/patient/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopyMedicalPatient($formValues, pk, success, error) {
	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valuePatientFirstName = $formValues.find('.valuePatientFirstName').val();
	if(valuePatientFirstName != null && valuePatientFirstName !== '')
		vals['patientFirstName'] = valuePatientFirstName;

	var valueFamilyName = $formValues.find('.valueFamilyName').val();
	if(valueFamilyName != null && valueFamilyName !== '')
		vals['familyName'] = valueFamilyName;

	var valuePatientFirstNamePreferred = $formValues.find('.valuePatientFirstNamePreferred').val();
	if(valuePatientFirstNamePreferred != null && valuePatientFirstNamePreferred !== '')
		vals['patientFirstNamePreferred'] = valuePatientFirstNamePreferred;

	var valuePatientBirthDate = $formValues.find('.valuePatientBirthDate').val();
	if(valuePatientBirthDate != null && valuePatientBirthDate !== '')
		vals['patientBirthDate'] = valuePatientBirthDate;

	var valueEnrollmentKeys = $formValues.find('input.valueEnrollmentKeys:checked').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['enrollmentKeys'] = [valueEnrollmentKeys];

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	putcopyMedicalPatientVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopyMedicalPatientVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/patient/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchMedicalPatient($formFilters, $formValues, pk, success, error) {
	var filters = patchMedicalPatientFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
	var removePk = $formFilters.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	var addPk = $formValues.find('.addPk').val();
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
	var removeCreated = $formFilters.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	var addCreated = $formValues.find('.addCreated').val();
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
	var removeModified = $formFilters.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	var addModified = $formValues.find('.addModified').val();
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
	var removeObjectId = $formFilters.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	var addObjectId = $formValues.find('.addObjectId').val();
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
	var removeArchived = $formFilters.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	setArchived = removeArchived ? null : valueArchived;
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
	var removeDeleted = $formFilters.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	setDeleted = removeDeleted ? null : valueDeleted;
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valuePatientFirstName = $formValues.find('.valuePatientFirstName').val();
	if(valuePatientFirstName != null && valuePatientFirstName !== '')
	var removePatientFirstName = $formFilters.find('.removePatientFirstName').val() === 'true';
	var setPatientFirstName = removePatientFirstName ? null : $formValues.find('.setPatientFirstName').val();
	if(removePatientFirstName || setPatientFirstName != null && setPatientFirstName !== '')
		vals['setPatientFirstName'] = setPatientFirstName;
	var addPatientFirstName = $formValues.find('.addPatientFirstName').val();
	if(addPatientFirstName != null && addPatientFirstName !== '')
		vals['addPatientFirstName'] = addPatientFirstName;
	var removePatientFirstName = $formValues.find('.removePatientFirstName').val();
	if(removePatientFirstName != null && removePatientFirstName !== '')
		vals['removePatientFirstName'] = removePatientFirstName;

	var valueFamilyName = $formValues.find('.valueFamilyName').val();
	if(valueFamilyName != null && valueFamilyName !== '')
	var removeFamilyName = $formFilters.find('.removeFamilyName').val() === 'true';
	var setFamilyName = removeFamilyName ? null : $formValues.find('.setFamilyName').val();
	if(removeFamilyName || setFamilyName != null && setFamilyName !== '')
		vals['setFamilyName'] = setFamilyName;
	var addFamilyName = $formValues.find('.addFamilyName').val();
	if(addFamilyName != null && addFamilyName !== '')
		vals['addFamilyName'] = addFamilyName;
	var removeFamilyName = $formValues.find('.removeFamilyName').val();
	if(removeFamilyName != null && removeFamilyName !== '')
		vals['removeFamilyName'] = removeFamilyName;

	var valuePatientFirstNamePreferred = $formValues.find('.valuePatientFirstNamePreferred').val();
	if(valuePatientFirstNamePreferred != null && valuePatientFirstNamePreferred !== '')
	var removePatientFirstNamePreferred = $formFilters.find('.removePatientFirstNamePreferred').val() === 'true';
	var setPatientFirstNamePreferred = removePatientFirstNamePreferred ? null : $formValues.find('.setPatientFirstNamePreferred').val();
	if(removePatientFirstNamePreferred || setPatientFirstNamePreferred != null && setPatientFirstNamePreferred !== '')
		vals['setPatientFirstNamePreferred'] = setPatientFirstNamePreferred;
	var addPatientFirstNamePreferred = $formValues.find('.addPatientFirstNamePreferred').val();
	if(addPatientFirstNamePreferred != null && addPatientFirstNamePreferred !== '')
		vals['addPatientFirstNamePreferred'] = addPatientFirstNamePreferred;
	var removePatientFirstNamePreferred = $formValues.find('.removePatientFirstNamePreferred').val();
	if(removePatientFirstNamePreferred != null && removePatientFirstNamePreferred !== '')
		vals['removePatientFirstNamePreferred'] = removePatientFirstNamePreferred;

	var valuePatientBirthDate = $formValues.find('.valuePatientBirthDate').val();
	if(valuePatientBirthDate != null && valuePatientBirthDate !== '')
	var removePatientBirthDate = $formFilters.find('.removePatientBirthDate').val() === 'true';
	var setPatientBirthDate = removePatientBirthDate ? null : $formValues.find('.setPatientBirthDate').val();
	if(removePatientBirthDate || setPatientBirthDate != null && setPatientBirthDate !== '')
		vals['setPatientBirthDate'] = setPatientBirthDate;
	var addPatientBirthDate = $formValues.find('.addPatientBirthDate').val();
	if(addPatientBirthDate != null && addPatientBirthDate !== '')
		vals['addPatientBirthDate'] = addPatientBirthDate;
	var removePatientBirthDate = $formValues.find('.removePatientBirthDate').val();
	if(removePatientBirthDate != null && removePatientBirthDate !== '')
		vals['removePatientBirthDate'] = removePatientBirthDate;

	var valueEnrollmentKeys = $formValues.find('input.valueEnrollmentKeys:checked').val();
	if(valueEnrollmentKeys != null && valueEnrollmentKeys !== '')
		vals['addEnrollmentKeys'] = valueEnrollmentKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
	var removeInheritPk = $formFilters.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
	var removeSessionId = $formFilters.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	var addSessionId = $formValues.find('.addSessionId').val();
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
	var removeUserId = $formFilters.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	var addUserId = $formValues.find('.addUserId').val();
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
	var removeUserKey = $formFilters.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	var addUserKey = $formValues.find('.addUserKey').val();
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
	var removeObjectTitle = $formFilters.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	patchMedicalPatientVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchMedicalPatientFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterPatientFirstName = $formFilters.find('.valuePatientFirstName').val();
		if(filterPatientFirstName != null && filterPatientFirstName !== '')
			filters.push({ name: 'fq', value: 'patientFirstName:' + filterPatientFirstName });

		var filterFamilyName = $formFilters.find('.valueFamilyName').val();
		if(filterFamilyName != null && filterFamilyName !== '')
			filters.push({ name: 'fq', value: 'familyName:' + filterFamilyName });

		var filterPatientFirstNamePreferred = $formFilters.find('.valuePatientFirstNamePreferred').val();
		if(filterPatientFirstNamePreferred != null && filterPatientFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientFirstNamePreferred:' + filterPatientFirstNamePreferred });

		var filterPatientBirthDate = $formFilters.find('.valuePatientBirthDate').val();
		if(filterPatientBirthDate != null && filterPatientBirthDate !== '')
			filters.push({ name: 'fq', value: 'patientBirthDate:' + filterPatientBirthDate });

		var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
		if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
			filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterPatientKey = $formFilters.find('.valuePatientKey').val();
		if(filterPatientKey != null && filterPatientKey !== '')
			filters.push({ name: 'fq', value: 'patientKey:' + filterPatientKey });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterClinicKeys = $formFilters.find('.valueClinicKeys').val();
		if(filterClinicKeys != null && filterClinicKeys !== '')
			filters.push({ name: 'fq', value: 'clinicKeys:' + filterClinicKeys });

		var filterPatientCompleteName = $formFilters.find('.valuePatientCompleteName').val();
		if(filterPatientCompleteName != null && filterPatientCompleteName !== '')
			filters.push({ name: 'fq', value: 'patientCompleteName:' + filterPatientCompleteName });

		var filterPatientCompleteNamePreferred = $formFilters.find('.valuePatientCompleteNamePreferred').val();
		if(filterPatientCompleteNamePreferred != null && filterPatientCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientCompleteNamePreferred:' + filterPatientCompleteNamePreferred });

		var filterPatientFormalName = $formFilters.find('.valuePatientFormalName').val();
		if(filterPatientFormalName != null && filterPatientFormalName !== '')
			filters.push({ name: 'fq', value: 'patientFormalName:' + filterPatientFormalName });

		var filterPatientBirthDateYear = $formFilters.find('.valuePatientBirthDateYear').val();
		if(filterPatientBirthDateYear != null && filterPatientBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateYear:' + filterPatientBirthDateYear });

		var filterPatientBirthDateMonthOfYear = $formFilters.find('.valuePatientBirthDateMonthOfYear').val();
		if(filterPatientBirthDateMonthOfYear != null && filterPatientBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateMonthOfYear:' + filterPatientBirthDateMonthOfYear });

		var filterPatientBirthDateDayOfWeek = $formFilters.find('.valuePatientBirthDateDayOfWeek').val();
		if(filterPatientBirthDateDayOfWeek != null && filterPatientBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateDayOfWeek:' + filterPatientBirthDateDayOfWeek });
	}
	return filters;
}

function patchMedicalPatientVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchMedicalPatientVals(filters, vals, success, error);
}

function patchMedicalPatientVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/patient?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getMedicalPatient(pk) {
	$.ajax({
		url: '/api/patient/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchMedicalPatient($formFilters, success, error) {
	var filters = searchMedicalPatientFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchMedicalPatientVals(filters, success, error);
}

function searchMedicalPatientFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterPatientFirstName = $formFilters.find('.valuePatientFirstName').val();
		if(filterPatientFirstName != null && filterPatientFirstName !== '')
			filters.push({ name: 'fq', value: 'patientFirstName:' + filterPatientFirstName });

		var filterFamilyName = $formFilters.find('.valueFamilyName').val();
		if(filterFamilyName != null && filterFamilyName !== '')
			filters.push({ name: 'fq', value: 'familyName:' + filterFamilyName });

		var filterPatientFirstNamePreferred = $formFilters.find('.valuePatientFirstNamePreferred').val();
		if(filterPatientFirstNamePreferred != null && filterPatientFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientFirstNamePreferred:' + filterPatientFirstNamePreferred });

		var filterPatientBirthDate = $formFilters.find('.valuePatientBirthDate').val();
		if(filterPatientBirthDate != null && filterPatientBirthDate !== '')
			filters.push({ name: 'fq', value: 'patientBirthDate:' + filterPatientBirthDate });

		var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
		if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
			filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterPatientKey = $formFilters.find('.valuePatientKey').val();
		if(filterPatientKey != null && filterPatientKey !== '')
			filters.push({ name: 'fq', value: 'patientKey:' + filterPatientKey });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterClinicKeys = $formFilters.find('.valueClinicKeys').val();
		if(filterClinicKeys != null && filterClinicKeys !== '')
			filters.push({ name: 'fq', value: 'clinicKeys:' + filterClinicKeys });

		var filterPatientCompleteName = $formFilters.find('.valuePatientCompleteName').val();
		if(filterPatientCompleteName != null && filterPatientCompleteName !== '')
			filters.push({ name: 'fq', value: 'patientCompleteName:' + filterPatientCompleteName });

		var filterPatientCompleteNamePreferred = $formFilters.find('.valuePatientCompleteNamePreferred').val();
		if(filterPatientCompleteNamePreferred != null && filterPatientCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientCompleteNamePreferred:' + filterPatientCompleteNamePreferred });

		var filterPatientFormalName = $formFilters.find('.valuePatientFormalName').val();
		if(filterPatientFormalName != null && filterPatientFormalName !== '')
			filters.push({ name: 'fq', value: 'patientFormalName:' + filterPatientFormalName });

		var filterPatientBirthDateYear = $formFilters.find('.valuePatientBirthDateYear').val();
		if(filterPatientBirthDateYear != null && filterPatientBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateYear:' + filterPatientBirthDateYear });

		var filterPatientBirthDateMonthOfYear = $formFilters.find('.valuePatientBirthDateMonthOfYear').val();
		if(filterPatientBirthDateMonthOfYear != null && filterPatientBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateMonthOfYear:' + filterPatientBirthDateMonthOfYear });

		var filterPatientBirthDateDayOfWeek = $formFilters.find('.valuePatientBirthDateDayOfWeek').val();
		if(filterPatientBirthDateDayOfWeek != null && filterPatientBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateDayOfWeek:' + filterPatientBirthDateDayOfWeek });
	}
	return filters;
}

function searchMedicalPatientVals(filters, success, error) {
	$.ajax({
		url: '/api/patient?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestMedicalPatientObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-hospital-user ');
			var $span = $('<span>').attr('class', '').text(o['patientCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchMedicalPatientVals($formFilters, success, error);
}

function suggestMedicalPatientEnrollmentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-notes-medical ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['patientKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_patientKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_patientKey_" + o['pk'] + "'); patchMedicalPatientVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#MedicalPatientForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchMedicalEnrollmentVals(filters, success, error);
}

// AdminSearch //

async function adminsearchMedicalPatient($formFilters, success, error) {
	var filters = adminsearchMedicalPatientFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchMedicalPatientVals(filters, success, error);
}

function adminsearchMedicalPatientFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterPatientFirstName = $formFilters.find('.valuePatientFirstName').val();
		if(filterPatientFirstName != null && filterPatientFirstName !== '')
			filters.push({ name: 'fq', value: 'patientFirstName:' + filterPatientFirstName });

		var filterFamilyName = $formFilters.find('.valueFamilyName').val();
		if(filterFamilyName != null && filterFamilyName !== '')
			filters.push({ name: 'fq', value: 'familyName:' + filterFamilyName });

		var filterPatientFirstNamePreferred = $formFilters.find('.valuePatientFirstNamePreferred').val();
		if(filterPatientFirstNamePreferred != null && filterPatientFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientFirstNamePreferred:' + filterPatientFirstNamePreferred });

		var filterPatientBirthDate = $formFilters.find('.valuePatientBirthDate').val();
		if(filterPatientBirthDate != null && filterPatientBirthDate !== '')
			filters.push({ name: 'fq', value: 'patientBirthDate:' + filterPatientBirthDate });

		var filterEnrollmentKeys = $formFilters.find('.valueEnrollmentKeys').val();
		if(filterEnrollmentKeys != null && filterEnrollmentKeys !== '')
			filters.push({ name: 'fq', value: 'enrollmentKeys:' + filterEnrollmentKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterPatientKey = $formFilters.find('.valuePatientKey').val();
		if(filterPatientKey != null && filterPatientKey !== '')
			filters.push({ name: 'fq', value: 'patientKey:' + filterPatientKey });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterClinicKeys = $formFilters.find('.valueClinicKeys').val();
		if(filterClinicKeys != null && filterClinicKeys !== '')
			filters.push({ name: 'fq', value: 'clinicKeys:' + filterClinicKeys });

		var filterPatientCompleteName = $formFilters.find('.valuePatientCompleteName').val();
		if(filterPatientCompleteName != null && filterPatientCompleteName !== '')
			filters.push({ name: 'fq', value: 'patientCompleteName:' + filterPatientCompleteName });

		var filterPatientCompleteNamePreferred = $formFilters.find('.valuePatientCompleteNamePreferred').val();
		if(filterPatientCompleteNamePreferred != null && filterPatientCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'patientCompleteNamePreferred:' + filterPatientCompleteNamePreferred });

		var filterPatientFormalName = $formFilters.find('.valuePatientFormalName').val();
		if(filterPatientFormalName != null && filterPatientFormalName !== '')
			filters.push({ name: 'fq', value: 'patientFormalName:' + filterPatientFormalName });

		var filterPatientBirthDateYear = $formFilters.find('.valuePatientBirthDateYear').val();
		if(filterPatientBirthDateYear != null && filterPatientBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateYear:' + filterPatientBirthDateYear });

		var filterPatientBirthDateMonthOfYear = $formFilters.find('.valuePatientBirthDateMonthOfYear').val();
		if(filterPatientBirthDateMonthOfYear != null && filterPatientBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateMonthOfYear:' + filterPatientBirthDateMonthOfYear });

		var filterPatientBirthDateDayOfWeek = $formFilters.find('.valuePatientBirthDateDayOfWeek').val();
		if(filterPatientBirthDateDayOfWeek != null && filterPatientBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'patientBirthDateDayOfWeek:' + filterPatientBirthDateDayOfWeek });
	}
	return filters;
}

function adminsearchMedicalPatientVals(filters, success, error) {
	$.ajax({
		url: '/api/admin/patient?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestMedicalPatientObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-hospital-user ');
			var $span = $('<span>').attr('class', '').text(o['patientCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchMedicalPatientVals($formFilters, success, error);
}

function suggestMedicalPatientEnrollmentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-notes-medical ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['patientKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_enrollmentKeys_' + pk + '_patientKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueEnrollmentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_enrollmentKeys_" + pk + "_patientKey_" + o['pk'] + "'); patchMedicalPatientVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'EnrollmentKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#MedicalPatientForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchMedicalEnrollmentVals(filters, success, error);
}

async function websocketMedicalPatient(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketMedicalPatient', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = json['numFound'];
			var numPATCH = json['numPATCH'];
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-orange ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-hospital-user w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify patients');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-orange ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			$('.box-' + id).remove();
			if(numPATCH < numFound)
				$('.top-box').append($box);
			if(success)
					success(json);
		});

		window.eventBus.registerHandler('websocketMedicalEnrollment', function (error, message) {
			$('#Page_enrollmentKeys').trigger('oninput');
			$('#Page_enrollmentKeys_add').text('add an enrollment');
			$('#Page_enrollmentKeys_add').removeClass('w3-disabled');
			$('#Page_enrollmentKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketMedicalEnrollment', function (error, message) {
			$('#Page_enrollmentKeys').trigger('oninput');
			$('#Page_enrollmentKeys_add').text('add an enrollment');
			$('#Page_enrollmentKeys_add').removeClass('w3-disabled');
			$('#Page_enrollmentKeys_add').attr('disabled', false);
		});
	}
}
async function websocketMedicalPatientInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchMedicalPatientVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputMedicalPatient' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputMedicalPatient' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'Modified'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputMedicalPatient' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputMedicalPatient' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'Deleted'));
			}
			var val = o['patientFirstName'];
			if(vars.includes('patientFirstName')) {
				$('.inputMedicalPatient' + pk + 'PatientFirstName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'PatientFirstName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'PatientFirstName'));
			}
			var val = o['familyName'];
			if(vars.includes('familyName')) {
				$('.inputMedicalPatient' + pk + 'FamilyName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'FamilyName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'FamilyName'));
			}
			var val = o['patientFirstNamePreferred'];
			if(vars.includes('patientFirstNamePreferred')) {
				$('.inputMedicalPatient' + pk + 'PatientFirstNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'PatientFirstNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'PatientFirstNamePreferred'));
			}
			var val = o['patientBirthDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('patientBirthDate')) {
				$('.inputMedicalPatient' + pk + 'PatientBirthDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'PatientBirthDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'PatientBirthDate'));
			}
			var val = o['enrollmentKeys'];
			if(vars.includes('enrollmentKeys')) {
				$('.inputMedicalPatient' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'EnrollmentKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'EnrollmentKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputMedicalPatient' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'InheritPk'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputMedicalPatient' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputMedicalPatient' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputMedicalPatient' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalPatient' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalPatient' + pk + 'UserKey'));
			}
		});
	}
}
