
// POST //

async function postMedicalClinic($formValues, success, error) {
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

	var valueClinicName = $formValues.find('.valueClinicName').val();
	if(valueClinicName != null && valueClinicName !== '')
		vals['clinicName'] = valueClinicName;

	var valueClinicLocation = $formValues.find('.valueClinicLocation').val();
	if(valueClinicLocation != null && valueClinicLocation !== '')
		vals['clinicLocation'] = valueClinicLocation;

	var valueClinicAdministratorName = $formValues.find('.valueClinicAdministratorName').val();
	if(valueClinicAdministratorName != null && valueClinicAdministratorName !== '')
		vals['clinicAdministratorName'] = valueClinicAdministratorName;

	var valueClinicEmailFrom = $formValues.find('.valueClinicEmailFrom').val();
	if(valueClinicEmailFrom != null && valueClinicEmailFrom !== '')
		vals['clinicEmailFrom'] = valueClinicEmailFrom;

	var valueClinicEmailTo = $formValues.find('.valueClinicEmailTo').val();
	if(valueClinicEmailTo != null && valueClinicEmailTo !== '')
		vals['clinicEmailTo'] = valueClinicEmailTo;

	var valueClinicPhoneNumber = $formValues.find('.valueClinicPhoneNumber').val();
	if(valueClinicPhoneNumber != null && valueClinicPhoneNumber !== '')
		vals['clinicPhoneNumber'] = valueClinicPhoneNumber;

	var valueClinicAddress = $formValues.find('.valueClinicAddress').val();
	if(valueClinicAddress != null && valueClinicAddress !== '')
		vals['clinicAddress'] = valueClinicAddress;

	var valueYearKeys = $formValues.find('.valueYearKeys').val();
	if(valueYearKeys != null && valueYearKeys !== '')
		vals['yearKeys'] = valueYearKeys;

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
		url: '/api/clinic'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postMedicalClinicVals(vals, success, error) {
	$.ajax({
		url: '/api/clinic'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCH //

async function patchMedicalClinic($formFilters, $formValues, pk, success, error) {
	var filters = patchMedicalClinicFilters($formFilters);

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

	var valueClinicName = $formValues.find('.valueClinicName').val();
	if(valueClinicName != null && valueClinicName !== '')
	var removeClinicName = $formFilters.find('.removeClinicName').val() === 'true';
	var setClinicName = removeClinicName ? null : $formValues.find('.setClinicName').val();
	if(removeClinicName || setClinicName != null && setClinicName !== '')
		vals['setClinicName'] = setClinicName;
	var addClinicName = $formValues.find('.addClinicName').val();
	if(addClinicName != null && addClinicName !== '')
		vals['addClinicName'] = addClinicName;
	var removeClinicName = $formValues.find('.removeClinicName').val();
	if(removeClinicName != null && removeClinicName !== '')
		vals['removeClinicName'] = removeClinicName;

	var valueClinicLocation = $formValues.find('.valueClinicLocation').val();
	if(valueClinicLocation != null && valueClinicLocation !== '')
	var removeClinicLocation = $formFilters.find('.removeClinicLocation').val() === 'true';
	var setClinicLocation = removeClinicLocation ? null : $formValues.find('.setClinicLocation').val();
	if(removeClinicLocation || setClinicLocation != null && setClinicLocation !== '')
		vals['setClinicLocation'] = setClinicLocation;
	var addClinicLocation = $formValues.find('.addClinicLocation').val();
	if(addClinicLocation != null && addClinicLocation !== '')
		vals['addClinicLocation'] = addClinicLocation;
	var removeClinicLocation = $formValues.find('.removeClinicLocation').val();
	if(removeClinicLocation != null && removeClinicLocation !== '')
		vals['removeClinicLocation'] = removeClinicLocation;

	var valueClinicAdministratorName = $formValues.find('.valueClinicAdministratorName').val();
	if(valueClinicAdministratorName != null && valueClinicAdministratorName !== '')
	var removeClinicAdministratorName = $formFilters.find('.removeClinicAdministratorName').val() === 'true';
	var setClinicAdministratorName = removeClinicAdministratorName ? null : $formValues.find('.setClinicAdministratorName').val();
	if(removeClinicAdministratorName || setClinicAdministratorName != null && setClinicAdministratorName !== '')
		vals['setClinicAdministratorName'] = setClinicAdministratorName;
	var addClinicAdministratorName = $formValues.find('.addClinicAdministratorName').val();
	if(addClinicAdministratorName != null && addClinicAdministratorName !== '')
		vals['addClinicAdministratorName'] = addClinicAdministratorName;
	var removeClinicAdministratorName = $formValues.find('.removeClinicAdministratorName').val();
	if(removeClinicAdministratorName != null && removeClinicAdministratorName !== '')
		vals['removeClinicAdministratorName'] = removeClinicAdministratorName;

	var valueClinicEmailFrom = $formValues.find('.valueClinicEmailFrom').val();
	if(valueClinicEmailFrom != null && valueClinicEmailFrom !== '')
	var removeClinicEmailFrom = $formFilters.find('.removeClinicEmailFrom').val() === 'true';
	var setClinicEmailFrom = removeClinicEmailFrom ? null : $formValues.find('.setClinicEmailFrom').val();
	if(removeClinicEmailFrom || setClinicEmailFrom != null && setClinicEmailFrom !== '')
		vals['setClinicEmailFrom'] = setClinicEmailFrom;
	var addClinicEmailFrom = $formValues.find('.addClinicEmailFrom').val();
	if(addClinicEmailFrom != null && addClinicEmailFrom !== '')
		vals['addClinicEmailFrom'] = addClinicEmailFrom;
	var removeClinicEmailFrom = $formValues.find('.removeClinicEmailFrom').val();
	if(removeClinicEmailFrom != null && removeClinicEmailFrom !== '')
		vals['removeClinicEmailFrom'] = removeClinicEmailFrom;

	var valueClinicEmailTo = $formValues.find('.valueClinicEmailTo').val();
	if(valueClinicEmailTo != null && valueClinicEmailTo !== '')
	var removeClinicEmailTo = $formFilters.find('.removeClinicEmailTo').val() === 'true';
	var setClinicEmailTo = removeClinicEmailTo ? null : $formValues.find('.setClinicEmailTo').val();
	if(removeClinicEmailTo || setClinicEmailTo != null && setClinicEmailTo !== '')
		vals['setClinicEmailTo'] = setClinicEmailTo;
	var addClinicEmailTo = $formValues.find('.addClinicEmailTo').val();
	if(addClinicEmailTo != null && addClinicEmailTo !== '')
		vals['addClinicEmailTo'] = addClinicEmailTo;
	var removeClinicEmailTo = $formValues.find('.removeClinicEmailTo').val();
	if(removeClinicEmailTo != null && removeClinicEmailTo !== '')
		vals['removeClinicEmailTo'] = removeClinicEmailTo;

	var valueClinicPhoneNumber = $formValues.find('.valueClinicPhoneNumber').val();
	if(valueClinicPhoneNumber != null && valueClinicPhoneNumber !== '')
	var removeClinicPhoneNumber = $formFilters.find('.removeClinicPhoneNumber').val() === 'true';
	var setClinicPhoneNumber = removeClinicPhoneNumber ? null : $formValues.find('.setClinicPhoneNumber').val();
	if(removeClinicPhoneNumber || setClinicPhoneNumber != null && setClinicPhoneNumber !== '')
		vals['setClinicPhoneNumber'] = setClinicPhoneNumber;
	var addClinicPhoneNumber = $formValues.find('.addClinicPhoneNumber').val();
	if(addClinicPhoneNumber != null && addClinicPhoneNumber !== '')
		vals['addClinicPhoneNumber'] = addClinicPhoneNumber;
	var removeClinicPhoneNumber = $formValues.find('.removeClinicPhoneNumber').val();
	if(removeClinicPhoneNumber != null && removeClinicPhoneNumber !== '')
		vals['removeClinicPhoneNumber'] = removeClinicPhoneNumber;

	var valueClinicAddress = $formValues.find('.valueClinicAddress').val();
	if(valueClinicAddress != null && valueClinicAddress !== '')
	var removeClinicAddress = $formFilters.find('.removeClinicAddress').val() === 'true';
	var setClinicAddress = removeClinicAddress ? null : $formValues.find('.setClinicAddress').val();
	if(removeClinicAddress || setClinicAddress != null && setClinicAddress !== '')
		vals['setClinicAddress'] = setClinicAddress;
	var addClinicAddress = $formValues.find('.addClinicAddress').val();
	if(addClinicAddress != null && addClinicAddress !== '')
		vals['addClinicAddress'] = addClinicAddress;
	var removeClinicAddress = $formValues.find('.removeClinicAddress').val();
	if(removeClinicAddress != null && removeClinicAddress !== '')
		vals['removeClinicAddress'] = removeClinicAddress;

	var valueYearKeys = $formValues.find('.valueYearKeys').val();
	if(valueYearKeys != null && valueYearKeys !== '')
	var removeYearKeys = $formFilters.find('.removeYearKeys').val() === 'true';
	var setYearKeys = removeYearKeys ? null : $formValues.find('.setYearKeys').val();
	if(removeYearKeys || setYearKeys != null && setYearKeys !== '')
		vals['setYearKeys'] = setYearKeys;
	var addYearKeys = $formValues.find('.addYearKeys').val();
	if(addYearKeys != null && addYearKeys !== '')
		vals['addYearKeys'] = addYearKeys;
	var removeYearKeys = $formValues.find('.removeYearKeys').val();
	if(removeYearKeys != null && removeYearKeys !== '')
		vals['removeYearKeys'] = removeYearKeys;

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

	patchMedicalClinicVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchMedicalClinicFilters($formFilters) {
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

		var filterClinicName = $formFilters.find('.valueClinicName').val();
		if(filterClinicName != null && filterClinicName !== '')
			filters.push({ name: 'fq', value: 'clinicName:' + filterClinicName });

		var filterClinicLocation = $formFilters.find('.valueClinicLocation').val();
		if(filterClinicLocation != null && filterClinicLocation !== '')
			filters.push({ name: 'fq', value: 'clinicLocation:' + filterClinicLocation });

		var filterClinicAdministratorName = $formFilters.find('.valueClinicAdministratorName').val();
		if(filterClinicAdministratorName != null && filterClinicAdministratorName !== '')
			filters.push({ name: 'fq', value: 'clinicAdministratorName:' + filterClinicAdministratorName });

		var filterClinicEmailFrom = $formFilters.find('.valueClinicEmailFrom').val();
		if(filterClinicEmailFrom != null && filterClinicEmailFrom !== '')
			filters.push({ name: 'fq', value: 'clinicEmailFrom:' + filterClinicEmailFrom });

		var filterClinicEmailTo = $formFilters.find('.valueClinicEmailTo').val();
		if(filterClinicEmailTo != null && filterClinicEmailTo !== '')
			filters.push({ name: 'fq', value: 'clinicEmailTo:' + filterClinicEmailTo });

		var filterClinicPhoneNumber = $formFilters.find('.valueClinicPhoneNumber').val();
		if(filterClinicPhoneNumber != null && filterClinicPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'clinicPhoneNumber:' + filterClinicPhoneNumber });

		var filterClinicAddress = $formFilters.find('.valueClinicAddress').val();
		if(filterClinicAddress != null && filterClinicAddress !== '')
			filters.push({ name: 'fq', value: 'clinicAddress:' + filterClinicAddress });

		var filterYearKeys = $formFilters.find('.valueYearKeys').val();
		if(filterYearKeys != null && filterYearKeys !== '')
			filters.push({ name: 'fq', value: 'yearKeys:' + filterYearKeys });

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

		var filterClinicKey = $formFilters.find('.valueClinicKey').val();
		if(filterClinicKey != null && filterClinicKey !== '')
			filters.push({ name: 'fq', value: 'clinicKey:' + filterClinicKey });

		var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
		if(filterSeasonKeys != null && filterSeasonKeys !== '')
			filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

		var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
		if(filterSessionKeys != null && filterSessionKeys !== '')
			filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

		var filterAgeGroupKeys = $formFilters.find('.valueAgeGroupKeys').val();
		if(filterAgeGroupKeys != null && filterAgeGroupKeys !== '')
			filters.push({ name: 'fq', value: 'ageGroupKeys:' + filterAgeGroupKeys });

		var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
		if(filterBlockKeys != null && filterBlockKeys !== '')
			filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

		var filterChildKeys = $formFilters.find('.valueChildKeys').val();
		if(filterChildKeys != null && filterChildKeys !== '')
			filters.push({ name: 'fq', value: 'childKeys:' + filterChildKeys });

		var filterEducationSort = $formFilters.find('.valueEducationSort').val();
		if(filterEducationSort != null && filterEducationSort !== '')
			filters.push({ name: 'fq', value: 'educationSort:' + filterEducationSort });

		var filterClinicSort = $formFilters.find('.valueClinicSort').val();
		if(filterClinicSort != null && filterClinicSort !== '')
			filters.push({ name: 'fq', value: 'clinicSort:' + filterClinicSort });

		var filterClinicShortName = $formFilters.find('.valueClinicShortName').val();
		if(filterClinicShortName != null && filterClinicShortName !== '')
			filters.push({ name: 'fq', value: 'clinicShortName:' + filterClinicShortName });

		var filterClinicCompleteName = $formFilters.find('.valueClinicCompleteName').val();
		if(filterClinicCompleteName != null && filterClinicCompleteName !== '')
			filters.push({ name: 'fq', value: 'clinicCompleteName:' + filterClinicCompleteName });
	}
	return filters;
}

function patchMedicalClinicVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchMedicalClinicVals(filters, vals, success, error);
}

function patchMedicalClinicVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/clinic?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getMedicalClinic(pk) {
	$.ajax({
		url: '/api/clinic/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchMedicalClinic($formFilters, success, error) {
	var filters = searchMedicalClinicFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchMedicalClinicVals(filters, success, error);
}

function searchMedicalClinicFilters($formFilters) {
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

		var filterClinicName = $formFilters.find('.valueClinicName').val();
		if(filterClinicName != null && filterClinicName !== '')
			filters.push({ name: 'fq', value: 'clinicName:' + filterClinicName });

		var filterClinicLocation = $formFilters.find('.valueClinicLocation').val();
		if(filterClinicLocation != null && filterClinicLocation !== '')
			filters.push({ name: 'fq', value: 'clinicLocation:' + filterClinicLocation });

		var filterClinicAdministratorName = $formFilters.find('.valueClinicAdministratorName').val();
		if(filterClinicAdministratorName != null && filterClinicAdministratorName !== '')
			filters.push({ name: 'fq', value: 'clinicAdministratorName:' + filterClinicAdministratorName });

		var filterClinicEmailFrom = $formFilters.find('.valueClinicEmailFrom').val();
		if(filterClinicEmailFrom != null && filterClinicEmailFrom !== '')
			filters.push({ name: 'fq', value: 'clinicEmailFrom:' + filterClinicEmailFrom });

		var filterClinicEmailTo = $formFilters.find('.valueClinicEmailTo').val();
		if(filterClinicEmailTo != null && filterClinicEmailTo !== '')
			filters.push({ name: 'fq', value: 'clinicEmailTo:' + filterClinicEmailTo });

		var filterClinicPhoneNumber = $formFilters.find('.valueClinicPhoneNumber').val();
		if(filterClinicPhoneNumber != null && filterClinicPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'clinicPhoneNumber:' + filterClinicPhoneNumber });

		var filterClinicAddress = $formFilters.find('.valueClinicAddress').val();
		if(filterClinicAddress != null && filterClinicAddress !== '')
			filters.push({ name: 'fq', value: 'clinicAddress:' + filterClinicAddress });

		var filterYearKeys = $formFilters.find('.valueYearKeys').val();
		if(filterYearKeys != null && filterYearKeys !== '')
			filters.push({ name: 'fq', value: 'yearKeys:' + filterYearKeys });

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

		var filterClinicKey = $formFilters.find('.valueClinicKey').val();
		if(filterClinicKey != null && filterClinicKey !== '')
			filters.push({ name: 'fq', value: 'clinicKey:' + filterClinicKey });

		var filterSeasonKeys = $formFilters.find('.valueSeasonKeys').val();
		if(filterSeasonKeys != null && filterSeasonKeys !== '')
			filters.push({ name: 'fq', value: 'seasonKeys:' + filterSeasonKeys });

		var filterSessionKeys = $formFilters.find('.valueSessionKeys').val();
		if(filterSessionKeys != null && filterSessionKeys !== '')
			filters.push({ name: 'fq', value: 'sessionKeys:' + filterSessionKeys });

		var filterAgeGroupKeys = $formFilters.find('.valueAgeGroupKeys').val();
		if(filterAgeGroupKeys != null && filterAgeGroupKeys !== '')
			filters.push({ name: 'fq', value: 'ageGroupKeys:' + filterAgeGroupKeys });

		var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
		if(filterBlockKeys != null && filterBlockKeys !== '')
			filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

		var filterChildKeys = $formFilters.find('.valueChildKeys').val();
		if(filterChildKeys != null && filterChildKeys !== '')
			filters.push({ name: 'fq', value: 'childKeys:' + filterChildKeys });

		var filterEducationSort = $formFilters.find('.valueEducationSort').val();
		if(filterEducationSort != null && filterEducationSort !== '')
			filters.push({ name: 'fq', value: 'educationSort:' + filterEducationSort });

		var filterClinicSort = $formFilters.find('.valueClinicSort').val();
		if(filterClinicSort != null && filterClinicSort !== '')
			filters.push({ name: 'fq', value: 'clinicSort:' + filterClinicSort });

		var filterClinicShortName = $formFilters.find('.valueClinicShortName').val();
		if(filterClinicShortName != null && filterClinicShortName !== '')
			filters.push({ name: 'fq', value: 'clinicShortName:' + filterClinicShortName });

		var filterClinicCompleteName = $formFilters.find('.valueClinicCompleteName').val();
		if(filterClinicCompleteName != null && filterClinicCompleteName !== '')
			filters.push({ name: 'fq', value: 'clinicCompleteName:' + filterClinicCompleteName });
	}
	return filters;
}

function searchMedicalClinicVals(filters, success, error) {
	$.ajax({
		url: '/api/clinic?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestMedicalClinicObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'far fa-clinic ');
			var $span = $('<span>').attr('class', '').text(o['clinicCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchMedicalClinicVals($formFilters, success, error);
}

// PUTImport //

async function putimportMedicalClinic($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportMedicalClinicVals(JSON.parse(json), success, error);
}

function putimportMedicalClinicVals(json, success, error) {
	$.ajax({
		url: '/api/clinic/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeMedicalClinic($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeMedicalClinicVals(JSON.parse(json), success, error);
}

function putmergeMedicalClinicVals(json, success, error) {
	$.ajax({
		url: '/api/clinic/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopyMedicalClinic($formValues, pk, success, error) {
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

	var valueClinicName = $formValues.find('.valueClinicName').val();
	if(valueClinicName != null && valueClinicName !== '')
		vals['clinicName'] = valueClinicName;

	var valueClinicLocation = $formValues.find('.valueClinicLocation').val();
	if(valueClinicLocation != null && valueClinicLocation !== '')
		vals['clinicLocation'] = valueClinicLocation;

	var valueClinicAdministratorName = $formValues.find('.valueClinicAdministratorName').val();
	if(valueClinicAdministratorName != null && valueClinicAdministratorName !== '')
		vals['clinicAdministratorName'] = valueClinicAdministratorName;

	var valueClinicEmailFrom = $formValues.find('.valueClinicEmailFrom').val();
	if(valueClinicEmailFrom != null && valueClinicEmailFrom !== '')
		vals['clinicEmailFrom'] = valueClinicEmailFrom;

	var valueClinicEmailTo = $formValues.find('.valueClinicEmailTo').val();
	if(valueClinicEmailTo != null && valueClinicEmailTo !== '')
		vals['clinicEmailTo'] = valueClinicEmailTo;

	var valueClinicPhoneNumber = $formValues.find('.valueClinicPhoneNumber').val();
	if(valueClinicPhoneNumber != null && valueClinicPhoneNumber !== '')
		vals['clinicPhoneNumber'] = valueClinicPhoneNumber;

	var valueClinicAddress = $formValues.find('.valueClinicAddress').val();
	if(valueClinicAddress != null && valueClinicAddress !== '')
		vals['clinicAddress'] = valueClinicAddress;

	var valueYearKeys = $formValues.find('.valueYearKeys').val();
	if(valueYearKeys != null && valueYearKeys !== '')
		vals['yearKeys'] = valueYearKeys;

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

	putcopyMedicalClinicVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopyMedicalClinicVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/clinic/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

async function websocketMedicalClinic(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketMedicalClinic', function (error, message) {
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
			var $card = $('<div>').attr('class', 'w3-card ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-pink ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'far fa-clinic w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify clinics');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-pink ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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
	}
}
async function websocketMedicalClinicInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchMedicalClinicVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputMedicalClinic' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalClinic' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalClinic' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputMedicalClinic' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalClinic' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalClinic' + pk + 'Modified'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputMedicalClinic' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalClinic' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalClinic' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputMedicalClinic' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalClinic' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalClinic' + pk + 'Deleted'));
			}
			var val = o['clinicName'];
			if(vars.includes('clinicName')) {
				$('.inputMedicalClinic' + pk + 'ClinicName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalClinic' + pk + 'ClinicName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalClinic' + pk + 'ClinicName'));
			}
			var val = o['clinicLocation'];
			if(vars.includes('clinicLocation')) {
				$('.inputMedicalClinic' + pk + 'ClinicLocation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalClinic' + pk + 'ClinicLocation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalClinic' + pk + 'ClinicLocation'));
			}
			var val = o['clinicAdministratorName'];
			if(vars.includes('clinicAdministratorName')) {
				$('.inputMedicalClinic' + pk + 'ClinicAdministratorName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalClinic' + pk + 'ClinicAdministratorName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalClinic' + pk + 'ClinicAdministratorName'));
			}
			var val = o['clinicEmailFrom'];
			if(vars.includes('clinicEmailFrom')) {
				$('.inputMedicalClinic' + pk + 'ClinicEmailFrom').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalClinic' + pk + 'ClinicEmailFrom').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalClinic' + pk + 'ClinicEmailFrom'));
			}
			var val = o['clinicEmailTo'];
			if(vars.includes('clinicEmailTo')) {
				$('.inputMedicalClinic' + pk + 'ClinicEmailTo').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalClinic' + pk + 'ClinicEmailTo').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalClinic' + pk + 'ClinicEmailTo'));
			}
			var val = o['clinicPhoneNumber'];
			if(vars.includes('clinicPhoneNumber')) {
				$('.inputMedicalClinic' + pk + 'ClinicPhoneNumber').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalClinic' + pk + 'ClinicPhoneNumber').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalClinic' + pk + 'ClinicPhoneNumber'));
			}
			var val = o['clinicAddress'];
			if(vars.includes('clinicAddress')) {
				$('.inputMedicalClinic' + pk + 'ClinicAddress').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalClinic' + pk + 'ClinicAddress').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalClinic' + pk + 'ClinicAddress'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputMedicalClinic' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalClinic' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalClinic' + pk + 'InheritPk'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputMedicalClinic' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalClinic' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalClinic' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputMedicalClinic' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalClinic' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalClinic' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputMedicalClinic' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varMedicalClinic' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputMedicalClinic' + pk + 'UserKey'));
			}
		});
	}
}
